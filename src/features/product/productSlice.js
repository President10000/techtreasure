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
export const getProductsByCategory = createAsyncThunk(
  "productByCategory/get",
  async (category, thunkAPI) => {
    try {
      return await productService.productsByCategory(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.Message);
    }
  }
);
export const popular = createAsyncThunk(
  "product/populer",
  async ( thunkAPI) => {
    try {
      return await productService.popular();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.Message);
    }
  }
);
export const today_Special = createAsyncThunk(
  "product/today_special",
  async ( thunkAPI) => {
    try {
      return await productService.today_Special();
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
      return thunkAPI.rejectWithValue(error.Message);
    }
  }
);

// initial state

const productState = {
  products: [],
  productsByCategory: [],
  popular:[],
  today_Special:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  refresh: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    setRefresh: function (state) {
      state.refresh = !state.refresh;
    },
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
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productsByCategory = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
      .addCase(popular.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(popular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.popular = action.payload;
      })
      .addCase(popular.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
      .addCase(today_Special.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(today_Special.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.today_Special = action.payload;
      })
      .addCase(today_Special.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.Message = "product added to wishlist";
        toast.success("Added to wishlist");
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload;
        toast.error("Failed to add to wishlist");
      });
  },
});
export const { setRefresh } = productSlice.actions;
export default productSlice.reducer;
