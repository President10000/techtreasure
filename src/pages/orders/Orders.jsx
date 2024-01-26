import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/orders/orderSlice";

export const Orders = () => {
  const dispatch = useDispatch();
  const { isSuccess, orders } = useSelector((state) => state.orders);
  useEffect(() => {
    function getCart() {
      if (!isSuccess) {
        dispatch(getOrders());
      }
    }
    getCart();
  }, [dispatch, isSuccess]);
  // console.log(orders);
  return (
    <div className="w-100">
      {orders?.map((item, i) => {
        const {
          products,
          address,
          paymentIntent,
          orderStatus,
          paymentMode,
          _id,
        } = item;

        return (
          <div key={_id}>
            {products?.map((item,j) => {
              const { count, product } = item;
              const { images, title, price } = product;
              return (
                <div
                  key={j}
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
                  <div className="text-center  col-4 col-md-2">
                    <p>{count}</p>
                  </div>
                  <div className="col-4 col-md-2">
                    <h5 className="price text-center">{count * price}</h5>
                  </div>
                  <div className="text-center col-4 col-md-2">
                    <p>{orderStatus}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
