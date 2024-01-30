// import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import { useEffect } from "react";
import {
  getUserCart,
  postProductToCart,
  replaceOrAdd_OneItemInCart,
  filter_cart,
  deleteCartItem,
} from "../../features/cart/cartSlice";
import { base_url, config } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import React from "react";
const CartItems = () => {
  const dispatch = useAppDispatch();
  const { cart, isSuccess, isError, isLoading } = useAppSelector(
    (state) => state.cartSlice
  );

  async function handleDeleteBtn(id: string) {
    const toRemove = [id];
    try {
      await deleteCartItem(toRemove);
      dispatch(filter_cart(id));
    } catch (error) {
      toast.error("internal server error");
    }
  }

  async function manageQty(_id: string, quantity: number) {
    try {
      const data = await dispatch(
        postProductToCart({ product_id: _id, quantity })
      ).unwrap();
      toast.success("added to cart");
      dispatch(replaceOrAdd_OneItemInCart(data));
    } catch (error: any) {
      toast.error("internal server error");
      console.error(error.message);
    }
  }

  useEffect(() => {
    function getCart() {
      if (!isSuccess) {
        dispatch(getUserCart("product"));
      }
    }
    getCart();
  }, [dispatch, isSuccess]);
  return (
    <>
      {!isLoading && isSuccess && cart.length && (
        <>
          <div className="w-100">
            {cart?.map((item, i) => {
              if (typeof item.product !== "object")
                throw new Error("did not found product details");
              const { quantity } = item;
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
                        quantity > 1 ? manageQty(_id, -1) : handleDeleteBtn(_id)
                      }
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => manageQty(_id, 1)}>+</button>
                  </div>
                  <div className="col-6 col-md-2">
                    <h5 className="price text-center">{quantity * price}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {!isLoading && !isError && !cart.length && isSuccess && (
        <p>cart is empty</p>
      )}
      {isError && !isLoading && <p>Something went wrong</p>}
    </>
  );
};

export default CartItems;
