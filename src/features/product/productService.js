import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
const getproducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async (prodId) => {
  console.log(config);
  console.log(prodId);

  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );

  if (response.data) {
    return console.log(response), response.data;
  }
};

export const productService = {
  getproducts,
  addToWishlist,
};
