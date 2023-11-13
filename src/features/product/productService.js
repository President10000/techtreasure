import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
const getproducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async () => {
  const response = await axios.put(`${base_url}product/wishlist`);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getproducts,
  addToWishlist,
};
