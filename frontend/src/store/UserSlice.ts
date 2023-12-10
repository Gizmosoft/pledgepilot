import { CaseReducer, SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/userServices";
import { User } from "../types/User";
import { RootState } from "./store";

interface UserCredentials {
  emailAddress: string;
  password: string;
}

interface UserState {
  loading: boolean;
  user: User | null; // Define a more specific type if possible
  error: string | null | undefined;
}

export const userLogin = createAsyncThunk<any, UserCredentials>(
  "user/loginUser",
  async (userCredentials: UserCredentials) => {
    const response = await loginUser(userCredentials);
    localStorage.setItem("user",JSON.stringify(response))
    return response?.data; // Assuming the response includes a data property
  }
);

const userSlice : any = createSlice<UserState,SliceCaseReducers<UserState>,any,any>({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
