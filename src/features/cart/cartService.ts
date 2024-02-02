import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { cart } from "../../utils/types";

const fetchCart = async (populate:string): Promise<cart[]> => {
  try {
    const response = await axios.get(`${base_url}${api.user.cart.get}?populate=${populate}`, config);
    //  if (response.data) {
    return response.data;
    //  }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export type cartArg = { product_id: string; quantity: number };
const postProduct = async (cart: cartArg): Promise<cart> => {
  try {
    const response = await axios.post(`${base_url}${api.user.cart.post}`, cart, config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const cartService = {
  fetchCart,
  postProduct,
};
