import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService, loginAndRegisterRes } from "./userService";
import { toast } from "react-toastify";
import { local_user } from "../../utils/axiosConfig";
import { user } from "../../utils/types";

export interface register {
  firstname?: string;
  lastname?: string;
  email: string;
  mobile?: string;
  password: string;
}

export interface login {
  email: string;
  // mobile?: string;
  password: string;
}
// Create a thunk to handle the async request to the API
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userdata: register, thunkAPI) => {
    try {
      return await authService.register(userdata);
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error);
      throw new Error(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userdata: login, thunkAPI) => {
    try {
      return await authService.login(userdata);
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error);
      throw new Error(error.message);
    }
  }
);

// initial state

interface initialState {
  user: loginAndRegisterRes | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  Message: string;
}

const initialstate: initialState = {
  user: local_user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("customer");
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        const errMsg = action.error.message;
        state.Message = errMsg ? errMsg : "something went wrong <registerUser>";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        const errMsg = action.error.message;
        state.Message = errMsg ? errMsg : "something went wrong <loginUser>";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
