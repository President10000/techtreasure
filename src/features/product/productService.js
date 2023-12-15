import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
const getproducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};
const productsByCategory = async (category) => {
  const response = await axios.get(`${base_url}product/category/${category}`);
  if (response.data) {
    return response.data;
  }
};

const popular = async () => {
  const response = await axios.get(`${base_url}product/deals/deals_of_the_day?key=popular`);
  if (response.data) {
    return response.data;
  }
};

const today_Special = async () => {
  const response = await axios.get(`${base_url}product/deals/deals_of_the_day?key=special`);
  if (response.data) {
    console.log({response})
    return response.data;
  }
};



const addToWishlist = async (prodId) => {
  // console.log(config);
  // console.log(prodId);

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
  productsByCategory,
  popular,today_Special
};
