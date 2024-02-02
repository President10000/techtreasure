import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productByCategory,productByFeature } from "./productService";
import { toast } from "react-toastify";
import { product } from "../../utils/types";

export const getProductsByCategory = createAsyncThunk(
  "productByCategory/get",
  async (category: categoryiesType, thunkAPI) => {
    try {
      const data = await productByCategory(category);
      return { data, category };
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);
export const getFeaturedProducts = createAsyncThunk(
  "getFeature_wise/get",
  async (feature: features, thunkAPI) => {
    try {
      const data = await productByFeature(feature);
      return { data, feature };
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.data);
      throw new Error(error.message);
    }
  }
);

export const sections: sectionsType = [
  "Manage Your Health Today",
  "Solutions for Everyday Ailments",
  "Limited-Time Treasures",
  "Fuel Your Fitness Journey",
];

export const categoryies: categoryiesType[] = [
  "Syringe",
  "Ortho",
  "Pathology machine",
  "Pratient monitor",
  "Cartical care",
  "Baby",
  "Dental care",
  "Gauze product",
];

const productState: productState = {
  byCategory: {
    products: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    Message: "",
    refresh: false,
  },
  featured: {
    products: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    Message: "",
    // refresh: false,
  },
};

export const productByCategorySlice = createSlice({
  name: "productByCategory",
  initialState: productState,
  reducers: {
    refreshCategory: function (state) {
      state.byCategory.refresh = !state.byCategory.refresh;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.byCategory.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.byCategory.isLoading = false;
        state.byCategory.isError = false;
        state.byCategory.isSuccess = true;
        const { data, category } = action.payload;
        state.byCategory.products = { ...state.byCategory.products, [`${category}`]: data };
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.byCategory.isLoading = false;
        state.byCategory.isError = true;
        state.byCategory.isSuccess = false;
        const errMsg = action.error.message;
        state.byCategory.Message = errMsg
          ? errMsg
          : "something went wrong <getProductsByCategory>";
      })
      .addCase(getFeaturedProducts.pending, (state) => {
        state.featured.isLoading = true;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.featured.isLoading = false;
        state.featured.isError = false;
        state.featured.isSuccess = true;
        const { data, feature } = action.payload;
        state.featured.products = { ...state.featured.products, [`${feature}`]: data };
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.featured.isLoading = false;
        state.featured.isError = true;
        state.featured.isSuccess = false;
        const errMsg = action.error.message;
        state.featured.Message = errMsg
          ? errMsg
          : "something went wrong <getFeaturedProducts>";
      });
  },
});
export const { refreshCategory } = productByCategorySlice.actions;
export default productByCategorySlice.reducer;

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
export type categoryiesType =
  | "Syringe"
  | "Ortho"
  | "Pathology machine"
  | "Pratient monitor"
  | "Cartical care"
  | "Baby"
  | "Dental care"
  | "Gauze product";

interface productState {
  byCategory: {
    products: {
      Syringe?: product[];
      Ortho?: product[];
      "Pathology machine"?: product[];
      "Pratient monitor"?: product[];
      "Cartical care"?: product[];
      Baby?: product[];
      "Dental care"?: product[];
      "Gauze product"?: product[];
    };
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    Message: string;
    refresh: boolean;
  };
  featured: {
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
    // refresh: boolean;
  };
}
