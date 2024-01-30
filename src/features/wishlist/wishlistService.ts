import { api, base_url, config } from "../../utils/axiosConfig";
import axios from "axios";
import { wishlist } from "../../utils/types";

export type mutateWishRes = { status: "added" | "removed"; wish: wishlist };

const addOrRemoveToWishlist = async (id: string): Promise<mutateWishRes> => {
  try {
    const response = await axios.put(`${base_url}${api.user.wishlist.addOrRemove}`, {}, config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getUserWishlist = async (populate: string): Promise<wishlist[]> => {
  try {
    const response = await axios.get(
      `${base_url}${api.user.wishlist.getByUserId}?populate=${populate}`,
      config
    );
    // if (response.data) {
    return response.data.wishlist;
    // }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { addOrRemoveToWishlist, getUserWishlist };
