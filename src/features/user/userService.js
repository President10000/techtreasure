import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
const register = async (userdata) => {
  const response = await axios.post(`${base_url}user/register`, userdata);
  if (response.data) {
    return response.data;
  }
};
const login = async (userdata) => {
  const response = await axios.post(`${base_url}user/login`, userdata);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const addToWishlist = async (prodId) => {

  try {
    const response = await axios.put(
      `${base_url}product/wishlist`,
      { prodId },
      config
    );

    if (response.data) {
      return  response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// const logout = async () => {
//   localStorage.removeItem("customer");
// };

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data.wishlist;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToWishlist
};
