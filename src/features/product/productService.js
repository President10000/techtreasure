import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";



const getproducts = async () => {
  const response = await axios.get(`${base_url}product`);
  try {
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


export const productService = {
  getproducts,
};
