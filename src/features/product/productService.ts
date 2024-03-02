import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { categoryiesType, features } from "./productSlice";
import { product } from "../../utils/types";

const productByCategory = async (
  category: categoryiesType
): Promise<product[]> => {
  try {
    const response = await axios.get(
      `${api.product.get()}?category.primary=${category}&as_draft=false`
    );
    //  if (response.data) {
    return response.data;
    //  }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const productByFeature = async (feature: features): Promise<product[]> => {
  try {
    const response = await axios.get(
      `${
        api.product.get()
      }?featured_on=${feature.toLowerCase()}&as_draft=false`
    );
    //  if (response.data) {
    return response.data as product[];
    //  }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { productByCategory, productByFeature };
