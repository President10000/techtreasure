import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import orderService from "./orderService";
import { address, order, product, user } from "../../utils/types";
import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { onPaymentSuccess } from "../../pages/checkout/Checkout";
interface paymentIntent {
  id: string;
  method: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  status: string;
  created_at: number;
  currency: string;
  notes?: Object;
  receipt: string;
  entity?: any;
  offer_id?: string;
  attempts?: number;
}

export interface orderRes {
  _id: string;
  products: {
    product: string | product;
    quantity: number;
  }[];
  paymentIntent: paymentIntent;

  paymentMode: "COD" | "RAZORPAY";
  orderStatus:
    | "Not Processed"
    | "Processing"
    | "Dispatched"
    | "Cancelled"
    | "Delivered";
  address: string | address;
  user: string | user;
}

interface createCOD {
  receipt: string;
  notes: Object;
  address: string;
}

export const createPayOnDeliveryOrder = createAsyncThunk(
  "createOrder/payOnDelivery",
  async (body: createCOD, thunkAPI): Promise<orderRes> => {
    try {
      const cod = await axios.post(
        `${base_url}${api.user.order.payOnDelivery}`,
        body,
        config
      );
      return cod.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
export const createPayNowOrder = createAsyncThunk(
  "createOrder/payNow",
  async (body: createCOD, thunkAPI): Promise<orderRes> => {
    try {
      const cod = await axios.post(
        `${base_url}${api.user.order.payNow}`,
        body,
        config
      );
      return cod.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

interface updateorder {
  id: string;
  paymentIntent: paymentIntent & onPaymentSuccess;
}
export const updatePaymentIntent = createAsyncThunk(
  "updateOrder/paymentIntent",
  async (data: updateorder, thunkAPI): Promise<orderRes> => {
    // const {}
    try {
      const cod = await axios.post(
        `${base_url}${api.user.order.update(data.id)}`,
        { paymentIntent: data.paymentIntent },
        config
      );
      return cod.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/get-orders",
  async (data, thunkAPI) => {
    try {
      const response = await orderService.getOrders();
      return response;
    } catch (error: any) {
      // return thunkAPI.rejectWithValue(error.response.data);
      throw new Error(error.message);
    }
  }
);

interface orderState {
  orders: order[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: orderState = {
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    pushToOrders: (state, action: PayloadAction<order | order[]>) => {
      let copy = [...state.orders];
      if (Array.isArray(action.payload)) {
        copy = [...action.payload, ...copy];
      } else {
        copy.unshift(action.payload);
      }
      state.orders = [...copy];
    },
    replaceOrders: (state, action: PayloadAction<order[]>) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        if (!action.payload)
          throw new Error("something went wrong <getOrders>");
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "users fetched successfully";
      })
      .addCase(getOrders.rejected, (state, action) => {
        const errMsg = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = errMsg ? errMsg : "something went wrong <getOrders>";
      });
  },
});
export const { replaceOrders, pushToOrders } = orderSlice.actions;
export default orderSlice.reducer;
