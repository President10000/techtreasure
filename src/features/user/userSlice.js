import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

// Create a thunk to handle the async request to the API
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userdata, thunkAPI) => {
    try {
      return await authService.register(userdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userdata, thunkAPI) => {
    try {
      return await authService.login(userdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.Message);
    }
  }
);

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

// initial state

const initialstate = {
  user: getCustomerfromLocalStorage,

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
        state.createdUser = action.payload;

        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();

        if (state.isError === true) {
          toast.error(action.payload.toString());
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;

        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("User Logged In Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();

        if (state.isError === true) {
          toast.error(action.payload.toString());
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;

        // if (state.isSuccess === true) {
        //   toast.info("User Wishlist Fetched Successfully");
        // }
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();

        if (state.isError === true) {
          toast.error(action.payload.toString());
        }
      });
  },
});

export const {logout}=authSlice.actions
export default authSlice.reducer;
