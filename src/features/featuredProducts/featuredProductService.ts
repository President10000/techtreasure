import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { product } from "../../utils/types";
import { features } from "./featuredProductSlice";

const productByFeature = async (feature: features): Promise<product[]> => {
  try {
    const response = await axios.get(
      `${base_url}${
        api.product.getAll
      }?featured_on=${feature.toLowerCase()}&as_draft=false`
    );
    //  if (response.data) {
    return response.data as product[];
    //  }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getFeature_wise = {
  productByFeature,
};
