import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import productBycategory from "../features/productsByCategory/productByCategorySlice";
import featuredProductSlice from "../features/featuredProducts/featuredProductSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productBycategory,
    featuredProductSlice,
    cartSlice
  },
});
