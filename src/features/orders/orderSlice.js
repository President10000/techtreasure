import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import orderService from "./orderService";

export const getOrders = createAsyncThunk(
  "orders/get-orders",
  async (thunkAPI) => {
    try {
      const response = await orderService.getOrders();
      console.log({response})
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "users fetched successfully";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      });
  },
});

export default orderSlice.reducer;
