
// import watch from "../../images/watch.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import { useEffect } from "react";
import {
  getUserCart,
  replaceCart,
  postProductToCart,
} from "../../features/cart/cartSlice";
import { base_url, config } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
const CartItems = () => {

  const dispatch = useDispatch();
  const { cart, isSuccess } = useSelector((state) => state.cartSlice);

  async function handleDeleteBtn(id) {
    const toRemove = [id];
    console.log(JSON.stringify({ toRemove }));
    try {
      const res = await fetch(`${base_url}user/cart`, {
        method: "DELETE",
        body: JSON.stringify({ toRemove }),
        headers: { ...config.headers, "Content-Type": "application/json" },
      });
      if (res.ok) {
        dispatch(replaceCart(await res.json()));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function manageQty(_id, count) {
    try {
      const { payload } = await dispatch(
        postProductToCart({ cart: [{ _id, count }] })
      );
      toast.success("added to cart");
      dispatch(replaceCart(payload));
      // console.log(payload)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    function getCart() {
      if (!isSuccess) {
        dispatch(getUserCart());
      }
    }
    getCart();
  }, [dispatch, isSuccess]);
  return (
    <div className="w-100">
      {cart?.products?.map((item, i) => {
        const { count } = item;
        const { title, price, images, _id } = item.product;
        return (
          <div
            key={i}
            className="cart-data d-flex flex-wrap py-3 mb-2 justify-content-between align-items-center "
          >
            <div className=" gap-10 d-flex flex-column flex-lg-row align-items-center col-12 col-md-6 col-lg-4">
              <div className="w-75 w-lg-25  d-flex align-items-center justify-content-center ">
                <div className="position-relative">
                  <img
                    src={images?.primary[0].url}
                    alt="product image"
                    className="img-fluid"
                  />
                  <button
                    onClick={() => handleDeleteBtn(_id)}
                    className="position-absolute top-0 start-0 rounded-2 "
                  >
                    <AiFillDelete className="text-danger" />
                  </button>
                </div>
              </div>
              <div className="fs-6">
                <p className="mb-0 text-center">
                  {title.length > 50 ? title.slice(0, 50) + "..." : title}
                </p>
                <div className="py-3  d-flex align-items-center justify-content-center gap-5">
                  <p className="mb-0">{price}</p>
                  <p className="mb-0">XXL</p>
                  <p className="mb-0">RED</p>
                </div>
              </div>
            </div>
            <div className="text-center  d-flex align-items-center justify-content-center gap-15 col-6 col-md-3">
              <button
                onClick={() =>
                  count > 1 ? manageQty(_id, -1) : handleDeleteBtn(_id)
                }
              >
                -
              </button>
              <p>{count}</p>
              <button onClick={() => manageQty(_id, 1)}>+</button>
            </div>
            <div className="col-6 col-md-2">
              <h5 className="price text-center">{count * price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
