import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addOrRemoveToWishlist, getUserWishlist } from "./wishlistService";
import { toast } from "react-toastify";
import { user, wishlist } from "../../utils/types";

export const getWishlist = createAsyncThunk(
  "get/wishlist",
  async (populate: string, thunkAPI) => {
    try {
      return await getUserWishlist(populate);
    } catch (error: any) {
      //   return thunkAPI.rejectWithValue(error.Message);
      throw new Error(error.message);
    }
  }
);

export const addOrRemoveWish = createAsyncThunk(
  "addOrRemove/wish",
  async (id: string, thunkAPI) => {
    // console.log(prodId);
    try {
      return await addOrRemoveToWishlist(id);
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);
// initial state

interface initialState {
  wishlist: wishlist[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  Message: string;
}

const initialstate: initialState = {
  wishlist: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialstate,
  reducers: {
    push_wishlist: (state, action: PayloadAction<wishlist | wishlist[]>) => {
      const wishlist = [...state.wishlist];
      if (Array.isArray(action.payload)) {
        action.payload.forEach((item) => {
          wishlist.unshift(item);
        });
      } else {
        wishlist.unshift(action.payload);
      }
      state.wishlist = wishlist;
    },
    filter_wishlist: (state, action: PayloadAction<string | string[]>) => {
      const toRemove = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const new_wish_list = [...state.wishlist].filter(
        (wish) => !toRemove.some((id) => id === wish._id || id === wish.product)
      );
      state.wishlist = new_wish_list;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        const errMsg = action.error.message;
        state.Message = errMsg ? errMsg : "something went wrong <getWishlist>";

        toast.error("some thing went wrong");
      });
  },
});

export const { push_wishlist, filter_wishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// export interface push_wishlistAction {
//   payload: wishlist | wishlist[];
//   type: string;
// }
// export interface filter_wishlistAction {
//   payload: string | string[];
//   type: string;
// }
