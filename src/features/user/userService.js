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
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserWishlist = async (populate) => {
  try {
    const response = await axios.get(
      `${base_url}user/wishlist?populate=${populate}`,
      config
    );
    if (response.data) {
      return response.data.wishlist;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserAddress = async (user_id) => {
  try {
    const response = await axios.get(
      `${base_url}user/address/address?user=${user_id}`,
      config
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const postUserAddress = async (address) => {
  try {
    const response = await axios.post(
      `${base_url}user/address/address`,
      address,
      config
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateUserAddress = async (data) => {
  try {
    const response = await axios.put(
      `${base_url}user/address/address`,
     data,
      config
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteUserAddress = async ( _id) => {
  try {
    const response = await axios.delete(
      `${base_url}user/address/address?id=${_id}`,
      config
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToWishlist,
  getUserAddress,
  postUserAddress,
  updateUserAddress,
  deleteUserAddress
};
