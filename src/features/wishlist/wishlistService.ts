import { api, base_url, config } from "../../utils/axiosConfig";
import axios from "axios";
import { wishlist } from "../../utils/types";

export type mutateWishRes = { status: "added" | "removed"; wish: wishlist };

const addOrRemoveToWishlist = async (id: string): Promise<mutateWishRes> => {
  try {
    const response = await axios.put(
      `${api.user.wishlist.addOrRemove(id)}`,
      {},
      config
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export type getWishlistArg = { user_id?: string; populate?: "product" | "" };

const getUserWishlist = async (data: getWishlistArg): Promise<wishlist[]> => {
  let { user_id, populate = "" } = data;
  try {
    const response = await axios.get(
      `${api.user.wishlist.getById(user_id)}?populate=${populate}`,
      config
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { addOrRemoveToWishlist, getUserWishlist };
