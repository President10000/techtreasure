import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const fetchCart = async () => {
 try {
    const response = await axios.get(`${base_url}user/cart`,config);
    if (response.data) {
      return response.data;
    }
 } catch (error) {
    throw new Error(error.message)
 }
};


const postProduct= async (cart) => {
    try {
       const response = await axios.post(`${base_url}user/cart`,cart,config);
       if (response.data) {
         return response.data;
       }
    } catch (error) {
       throw new Error(error.message)
    }
   };


export const cartService = {
    fetchCart,postProduct
};
