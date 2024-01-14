import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import productByCategorySlice from "../features/productsByCategory/productByCategorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productBycategory:productByCategorySlice
  },
});
