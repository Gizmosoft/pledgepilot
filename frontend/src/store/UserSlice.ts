import { CaseReducer, PayloadAction, SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../services/userServices";
import { LoginResponse, User } from "../types/User";
import { RootState } from "./store";

interface UserCredentials {
  emailAddress: string;
  password: string;
}

export interface UserState {
  loading: boolean;
  loginResponse : LoginResponse | null; // Define a more specific type if possible
  error: string | null | undefined;
}

export const userLogin = createAsyncThunk<any, UserCredentials>(
  "user/loginUser",
  async (userCredentials: UserCredentials) => {
    const response = await loginUser(userCredentials);
    console.log(response, "login response user slice");
    if(response?.status == 200){
      localStorage.setItem("user",JSON.stringify(response?.data))
      sessionStorage.setItem("user",JSON.stringify(response.data?.user));
    }
    return response?.data; // Assuming the response includes a data property
  }
);

export const userLogout = createAsyncThunk<any, void>(
  "user/logoutUser",
  async () => {
    try {
      const response  = await logoutUser(); // You need to implement the logout service
      if(response?.status == 204){
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
      }
      // If needed, you can dispatch additional actions or perform cleanup here
      return {}; // You can return an empty object or any data as needed
    } catch (error) {
      console.log(error)
    }
  }
);

const userSlice : any = createSlice<UserState,SliceCaseReducers<UserState>,any,any>({
  name: "user",
  initialState: {
    loading: false,
    loginResponse: null,
    error: null,
  } as UserState,
  reducers: {
    setUser: (state, action) => {
      console.log(state,"state");
      state.loginResponse = action.payload;
    },
    clearUser: (state) => {
      state.loginResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action:any) => {
      console.log(action.payload);
      state.loading = false;
      state.loginResponse = action.payload;
      console.log(state.loginResponse,"state");
      
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //logout
    builder.addCase(userLogout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.loading = false;
      state.loginResponse = null; // Reset the user state upon logout
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Logout failed";
    });

  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;