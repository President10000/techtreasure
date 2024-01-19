import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "./cartService";

export const postProductToCart = createAsyncThunk(
  "postProductToCart/post",
  async (cart, thunkAPI) => {
    try {
      const data = await cartService.postProduct(cart);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserCart = createAsyncThunk("getCart/get", async (thunkAPI) => {
  try {
    const data = await cartService.fetchCart();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const cartState = {
  cart: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  refresh: false,
};

export const cartSlice = createSlice({
  name: "getCart",
  initialState: cartState,
  reducers: {
    setRefresh: function (state) {
      state.refresh = !state.refresh;
    },
    replaceCart: function (state, action) {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload
          ? action.payload.toString()
          : "some thing went wrong";
      });
  },
});
export const { setRefresh, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
