import {
  CaseReducer,
  PayloadAction,
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../services/userServices";
import { LoginResponse, User } from "../types/User";
import { RootState } from "./store";

interface UserCredentials {
  emailAddress: string;
  password: string;
}

export interface UserState {
  loading: boolean;
  loginResponse: LoginResponse | null; // Define a more specific type if possible
  error: string | null | undefined;
}
//ASunc thunk for user login
export const userLogin = createAsyncThunk<any, UserCredentials>(
  "user/loginUser",
  async (userCredentials: UserCredentials) => {
    const response = await loginUser(userCredentials);
    if (response?.status == 200) {
      localStorage.setItem("user", JSON.stringify(response?.data));
      sessionStorage.setItem("user", JSON.stringify(response.data?.user));
    }
    return response?.data;
  }
);
//Async thunk to logout user
export const userLogout = createAsyncThunk<any, void>(
  "user/logoutUser",
  async () => {
    try {
      const response = await logoutUser();
      if (response?.status == 204) {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
      }

      return {};
    } catch (error) {
      console.log(error);
    }
  }
);
//user slice to store user state in the redux
const userSlice: any = createSlice<
  UserState,
  SliceCaseReducers<UserState>,
  any,
  any
>({
  name: "user",
  initialState: {
    loading: false,
    loginResponse: null,
    error: null,
  } as UserState,
  reducers: {
    setUser: (state, action) => {
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
    builder.addCase(userLogin.fulfilled, (state, action: any) => {
      state.loading = false;
      state.loginResponse = action.payload;
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
