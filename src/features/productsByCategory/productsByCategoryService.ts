import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { categoryies } from "./productByCategorySlice";
import { product } from "../../utils/types";

const productByCategory = async (category: categoryies): Promise<product[]> => {
  try {
    const response = await axios.get(
      `${base_url}${api.product.getAll}?category.primary=${category}&as_draft=false`
    );
    //  if (response.data) {
    return response.data;
    //  }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCategory_wise = {
  productByCategory,
};
