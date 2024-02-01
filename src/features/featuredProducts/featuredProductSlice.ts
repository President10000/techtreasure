import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeature_wise } from "./featuredProductService";
import { product } from "../../utils/types";

export const getFeaturedProducts = createAsyncThunk(
  "getFeature_wise/get",
  async (feature: features, thunkAPI) => {
    try {
      const data = await getFeature_wise.productByFeature(feature);
      return { data, feature };
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.data);
      throw new Error(error.message);
    }
  }
);

export type features =
  | "Manage Your Health Today"
  | "Solutions for Everyday Ailments"
  | "Limited-Time Treasures"
  | "Fuel Your Fitness Journey";
export type sectionsType = [
  "Manage Your Health Today",
  "Solutions for Everyday Ailments",
  "Limited-Time Treasures",
  "Fuel Your Fitness Journey"
];
export const sections: sectionsType = [
  "Manage Your Health Today",
  "Solutions for Everyday Ailments",
  "Limited-Time Treasures",
  "Fuel Your Fitness Journey",
];
interface productState {
  products: {
    "Manage Your Health Today"?: product[];
    "Solutions for Everyday Ailments"?: product[];
    "Limited-Time Treasures"?: product[];
    "Fuel Your Fitness Journey"?: product[];
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  Message: string;
  refresh: boolean;
}

const productState: productState = {
  products: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
  refresh: false,
};

export const featuredProductSlice = createSlice({
  name: "featured_product",
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
        if (!action.payload)
          throw new Error(
            "something went wrong in <getFeaturedProducts>, data not found "
          );
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const { data, feature } = action.payload;
        state.products = { ...state.products, [`${feature}`]: data };
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        const errMsg = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = errMsg
          ? errMsg
          : "something went wrong <getFeaturedProducts>";
      });
  },
});
export const { setRefresh } = featuredProductSlice.actions;
export default featuredProductSlice.reducer;
