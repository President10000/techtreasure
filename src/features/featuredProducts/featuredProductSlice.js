import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeature_wise } from "./featuredProductService";
import { toast } from "react-toastify";


export const getFeaturedProducts = createAsyncThunk(
  "productByCategory/get",
  async (feature, thunkAPI) => {
    try {
      const data= await getFeature_wise.productByFeature(feature);
      return {data,feature}
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

export const featuredProductSlice = createSlice({
  name: "productByCategory",
  initialState: productState,
  reducers: {
    setRefresh: function (state) {
      state.refresh = !state.refresh;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeaturedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const {data,feature}=action.payload;
        console.log(data,feature)
        const newProducts={}
        newProducts[`${feature}`]=data
        state.products = {...state.products,...newProducts}
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      })
      
  },
});
export const { setRefresh } = featuredProductSlice.actions;
export default featuredProductSlice.reducer;
