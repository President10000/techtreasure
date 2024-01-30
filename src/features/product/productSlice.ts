// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { productService } from "./productService";
// import { product } from "../../utils/types";

// // Create a thunk to handle the async request to the API

// export const getAllProducts = createAsyncThunk(
//   "product/get",
//   async (thunkAPI) => {
//     try {
//       return await productService.getproducts();
//     } catch (error: any) {
//       // return thunkAPI.rejectWithValue(error.Message);
//       throw new Error(error.message);
//     }
//   }
// );

// // initial state
// interface productState {
//   products: product[];
//   isError: boolean;
//   isSuccess: boolean;
//   isLoading: boolean;
//   Message: string;
// }
// const productState: productState = {
//   products: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   Message: "",
// };

// export const productSlice = createSlice({
//   name: "product",
//   initialState: productState,
//   reducers: {
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllProducts.fulfilled, (state, action) => {
//         if (!action.payload)
//           throw new Error(
//             "something went wrong in <getAllProducts>, data not found "
//           );
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.products = action.payload;
//       })
//       .addCase(getAllProducts.rejected, (state, action) => {
//         const errMsg = action.error.message;
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.Message = errMsg
//           ? errMsg
//           : "something went wrong <getFeaturedProducts>";
//       });
//   },
// });
// // export const { setRefresh } = productSlice.actions;
// export default productSlice.reducer;
