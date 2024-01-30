import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { cartArg, cartService } from "./cartService";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { cart } from "../../utils/types";
import { base_url, config } from "../../utils/axiosConfig";

export const deleteCartItem = createAsyncThunk(
  "deleteCartItem/delete",
  async (toRemove: string | string[], thunkAPI): Promise<cart|cart[]> => {
    try {
      const res = await fetch(`${base_url}user/cart`, {
        method: "DELETE",
        body: JSON.stringify({ toRemove }),
        headers: { ...config.headers, "Content-Type": "application/json" },
      });
      if (res.ok) {
        return await res.json();
      } else {
        throw new Error("internal server error");
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const postProductToCart = createAsyncThunk(
  "postProductToCart/post",
  async (cart: cartArg, thunkAPI): Promise<cart> => {
    try {
      const data = await cartService.postProduct(cart);
      return data;
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "getCart/get",
  async (populate: string, thunkAPI): Promise<cart[]> => {
    try {
      const data = await cartService.fetchCart(populate);
      return data;
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

interface cartState {
  cart: cart[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  Message: string;
  refresh: boolean;
}

const cartState: cartState = {
  cart: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  refresh: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    setRefresh: function (state) {
      state.refresh = !state.refresh;
    },
    replaceOrAdd_OneItemInCart: (state, action: PayloadAction<cart>) => {
      const { _id } = action.payload;
      let copy = [...state.cart];
      if (copy.some((item) => item._id === _id)) {
        copy = copy.map((item) => {
          if (_id === item._id) {
            return action.payload;
          } else {
            return item;
          }
        });
      } else {
        copy.unshift(action.payload);
      }

      state.cart = copy;
    },
    replaceCart: function (state, action: PayloadAction<cart[]>) {
      state.cart = action.payload;
    },
    filter_cart: (state, action: PayloadAction<string | string[]>) => {
      const toRemove = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const new_wish_list = [...state.cart].filter(
        (wish) => !toRemove.some((id) => id === wish._id || id === wish.product)
      );
      state.cart = new_wish_list;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        if (!action.payload)
          throw new Error(
            "something went wrong in <getUserCart>, data not found "
          );
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        const errMsg = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = errMsg ? errMsg : "something went wrong <getUserCart>";
      });
  },
});
export const { setRefresh, replaceOrAdd_OneItemInCart, replaceCart, filter_cart } =
  cartSlice.actions;
export default cartSlice.reducer;
