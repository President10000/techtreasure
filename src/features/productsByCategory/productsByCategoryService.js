import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const productByCategory = async (category) => {
 try {
    const response = await axios.get(`${base_url}product?category.primary=${category}&as_draft=false`);
    if (response.data) {
      return response.data;
    }
 } catch (error) {
    throw new Error(error.message)
 }
};


export const getCategory_wise = {
    productByCategory,
};
