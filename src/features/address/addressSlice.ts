import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserAddress,
  postUserAddress,
  deleteUserAddress,
  updateUserAddress,
  addressToPost,
  toUpdate,
} from "./addressService";
import { address } from "../../utils/types";

export const getAddress = createAsyncThunk(
  "address/get",
  async (user_id: string, thunkAPI) => {
    try {
      return await getUserAddress(user_id);
    } catch (error: any) {
      //   return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);
export const saveAddress = createAsyncThunk(
  "address/post",
  async (address: addressToPost, thunkAPI) => {
    try {
      return await postUserAddress(address);
    } catch (error: any) {
      //   return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);
export const editAddress = createAsyncThunk(
  "address/put",
  async (data: toUpdate, thunkAPI) => {
    try {
      return await updateUserAddress(data);
    } catch (error: any) {
      //   return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);
export const deleteAddress = createAsyncThunk(
  "address/delete",
  async (_id: string, thunkAPI) => {
    try {
      return await deleteUserAddress(_id);
    } catch (error: any) {
      //   return thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

// initial state

interface initialState {
  address: address[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  Message: string;
}

const initialstate: initialState = {
  address: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
};
export const addressSlice = createSlice({
  name: "address",
  initialState: initialstate,
  reducers: {
    push_Addres: (state, action: PayloadAction<address | address[]>) => {
      const address = [...state.address];
      if (Array.isArray(action.payload)) {
        action.payload.forEach((item) => {
          address.unshift(item);
        });
      } else {
        address.unshift(action.payload);
      }

      state.address = address;
    },
    replace_OneAddres: (state, action: PayloadAction<address>) => {
      const { _id } = action.payload;
      const replaced = [...state.address].map((item) => {
        if (_id === item._id) {
          return action.payload;
        } else {
          return item;
        }
      });

      state.address = replaced;
    },
    filter_Address: (state, action: PayloadAction< string | string[]>) => {
      const toRemove = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const new_address = [...state.address].filter(
        (address) => !toRemove.some((id) => id === address._id)
      );
      state.address = new_address;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading= false;
        state.isError= false;
        state.isSuccess = true;
        state.address = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError= true;
        state.isSuccess = false;
        const errMsg = action.error.message;
        state.Message = errMsg ? errMsg : "something went wrong <getAddress>";
        toast.error("some thing went wrong");
        // if (state.isError === true) {
        // }
      });
  },
});

export const { push_Addres, filter_Address, replace_OneAddres } =
  addressSlice.actions;
export default addressSlice.reducer;

// export interface push_addresstAction {
//   payload: address | address[];
//   type: string;
// }
// export interface replace_OneAddresstAction {
//   payload: address;
//   type: string;
// }
// export interface filter_addressAction {
//   payload: string | string[];
//   type: string;
// }
