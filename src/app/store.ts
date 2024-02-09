import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/userSlice";
import productReducer from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";
import orders from "../features/orders/orderSlice";
import wishlist from "../features/wishlist/wishlistSlice";
import address from "../features/address/addressSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cartSlice,
    orders,
    wishlist,
    address,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch