import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory_wise } from "./productsByCategoryService";
import { toast } from "react-toastify";
import { product } from "../../utils/types";

export const getProductsByCategory = createAsyncThunk(
  "productByCategory/get",
  async (category: categoryiesType, thunkAPI) => {
    try {
      const data = await getCategory_wise.productByCategory(category);
      return { data, category };
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

export const categoryies = [
  "Syringe",
  "Ortho",
  "Pathology machine",
  "Pratient monitor",
  "Cartical care",
  "Baby",
  "Dental care",
  "Gauze product"
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
}

const productState: productState = {
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
        if (!action.payload)
          throw new Error(
            "something went wrong in <getProductsByCategory>, data not found "
          );
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const { data, category } = action.payload;
        // const newProducts = {};
        // newProducts[`${category}`] = data;
        state.products = { ...state.products, [`${category}`]: data };
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        const errMsg = action.error.message;
        state.Message = errMsg
          ? errMsg
          : "something went wrong <getFeaturedProducts>";
      });
  },
});
export const { setRefresh } = productByCategorySlice.actions;
export default productByCategorySlice.reducer;
