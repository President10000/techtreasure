import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

// Create a thunk to handle the async request to the API

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getproducts();
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
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// initial state

const productState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  // refresh: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    // setRefresh: function (state) {
    //   state.refresh = !state.refresh;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
  },
});
// export const { setRefresh } = productSlice.actions;
export default productSlice.reducer;
