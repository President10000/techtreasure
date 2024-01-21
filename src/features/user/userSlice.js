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

export const getWishlist = createAsyncThunk(
  "user/wishlist",
  async (populate, thunkAPI) => {
    try {
      return await authService.getUserWishlist(populate ? populate : "");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.Message);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    // console.log(prodId);
    try {
      return await authService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAddress = createAsyncThunk(
  "address/get",
  async (user_id, thunkAPI) => {
    try {
      return await authService.getUserAddress(user_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const saveAddress = createAsyncThunk(
  "address/post",
  async (address, thunkAPI) => {
    try {
      return await authService.postUserAddress(address);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editAddress = createAsyncThunk(
  "address/put",
  async (address, _id, thunkAPI) => {
    try {
      return await authService.updateUserAddress(address, _id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteAddress = createAsyncThunk(
  "address/delete",
  async (_id, thunkAPI) => {
    try {
      return await authService.deleteUserAddress(_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

// initial state

const initialstate = {
  user: getCustomerfromLocalStorage,
  wishlist: [],
  address: [],
  isError: {},
  isSuccess: {},
  isLoading: {},
  Message: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("customer");
      state.user = null;
    },
    push_wishlist: (state, action) => {
      const wishlist = [...state.wishlist];
      action.payload.forEach((item) => {
        wishlist.unshift(item);
      });
      state.wishlist = wishlist;
    },
    filter_wishlist: (state, action) => {
      const new_wish_list = [...state.wishlist].filter(
        (wish) => !action.payload.some((id) => id === wish._id)
      );
      state.wishlist = new_wish_list;
    },
    push_Addres: (state, action) => {
      const address = [...state.address];
      action.payload.forEach((item) => {
        address.unshift(item);
      });
      state.address = address;
    },
    replace_OneAddres: (state, action) => {
      const { address, _id } = action.payload;
      const replaced = [...state.address].map((item) => {
        if (_id === item._id) {
          return address;
        } else {
          return item;
        }
      });

      state.address = replaced;
    },
    filter_Address: (state, action) => {
      const new_address = [...state.address].filter(
        (address) => !action.payload.some((id) => id === address._id)
      );
      state.address = new_address;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading.registerUser = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading.registerUser = false;
        state.isError.registerUser = false;
        state.isSuccess.registerUser = true;
        state.createdUser = action.payload;

        if (state.isSuccess.registerUser === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading.registerUser = false;
        state.isError.registerUser = true;
        state.isSuccess.registerUser = false;
        state.Message.registerUser = action.payload.toString();

        if (state.isError.registerUser === true) {
          toast.error(action.payload.toString());
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading.loginUser = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading.loginUser = false;
        state.isError.loginUser = false;
        state.isSuccess.loginUser = true;
        state.user = action.payload;

        if (state.isSuccess.loginUser === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("User Logged In Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading.loginUser = false;
        state.isError.loginUser = true;
        state.isSuccess.loginUser = false;
        state.Message.loginUser = action.payload.toString();

        if (state.isError.loginUser === true) {
          toast.error(action.payload.toString());
        }
      })
      .addCase(getWishlist.pending, (state) => {
        state.isLoading.getWishlist = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading.getWishlist = false;
        state.isError.getWishlist = false;
        state.isSuccess.getWishlist = true;
        state.wishlist = action.payload;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading.getWishlist = false;
        state.isError.getWishlist = true;
        state.isSuccess.getWishlist = false;
        state.Message.getWishlist = action.payload.toString();

        if (state.isError.getWishlist === true) {
          toast.error(action.payload.toString());
        }
      })
      .addCase(getAddress.pending, (state) => {
        state.isLoading.getAddress = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading.getAddress = false;
        state.isError.getAddress = false;
        state.isSuccess.getAddress = true;
        state.address = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading.getAddress = false;
        state.isError.getAddress = true;
        state.isSuccess.getAddress = false;
        state.Message.getAddress = action.payload.toString();

        if (state.isError.getWishlist === true) {
          toast.error(action.payload.toString());
        }
      });
  },
});

export const {
  logout,
  push_wishlist,
  filter_wishlist,
  push_Addres,
  filter_Address,
  replace_OneAddres
} = authSlice.actions;
export default authSlice.reducer;
