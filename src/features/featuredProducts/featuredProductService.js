import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const productByFeature = async (feature) => {
 try {
    const response = await axios.get(`${base_url}product?featured_on=${feature}&as_draft=false`);
    if (response.data) {
      return response.data;
    }
 } catch (error) {
    throw new Error(error.message)
 }
};


export const getFeature_wise = {
    productByFeature,
};
