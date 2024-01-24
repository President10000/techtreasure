import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory_wise } from "./productsByCategoryService";
import { toast } from "react-toastify";


export const getProductsByCategory = createAsyncThunk(
  "productByCategory/get",
  async (category, thunkAPI) => {
    try {
      const data= await getCategory_wise.productByCategory(category);
      return {data,category}
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productState = {
  products: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  refresh: false,
};

export const productByCategorySlice = createSlice({
  name: "productByCategory",
  initialState: productState,
  reducers: {
    setRefresh: function (state) {
      state.refresh = !state.refresh;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const {data,category}=action.payload;
        const newProducts={}
        newProducts[`${category}`]=data
        state.products = {...state.products,...newProducts}
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
      
  },
});
export const { setRefresh } = productByCategorySlice.actions;
export default productByCategorySlice.reducer;
