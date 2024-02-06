import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../../components/Container";
import "./checkout.css";
import Address, { addressKeys } from "../profile/subComponent/Address";
import Address_form from "../profile/subComponent/Address_form";
import CartItems from "../../components/cartItem/CartItems";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
import { toast } from "react-toastify";

import { useCallback } from "react";
import useRazorpay from "react-razorpay";

import {
  deleteCartItem,
  filter_cart,
  replaceCart,
} from "../../features/cart/cartSlice";
import {
  createPayNowOrder,
  createPayOnDeliveryOrder,
  getOrders,
  orderRes,
  pushToOrders,
  replaceOrders,
  updatePaymentIntent,
} from "../../features/orders/orderSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import React from "react";
import { address } from "../../utils/types";

const Checkout = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [address_modal, setAddress_modal] = useState(false);
  const { cart, isSuccess, isError, isLoading } = useAppSelector(
    (state) => state.cartSlice
  );
  const [totalAmount, setTotalAmount] = useState<number>();
  const [shipping_address, setShipping_address] = useState<address>();

  async function redirectToOrders(data: orderRes) {
    try {
      dispatch(pushToOrders(data));
      const toRemove = data.products?.map((item) =>
        typeof item.product === "string" ? item.product : item.product._id
      );
      await dispatch(deleteCartItem(toRemove)).unwrap();
      dispatch(filter_cart(toRemove));
      navigate("/profile/orders");
    } catch (error) {
      console.error(error);
      toast.error("reload page to see updates");
    }
  }

  async function proceedToPayment() {
    if (!shipping_address) {
      toast.error("address not selected");
      return;
    }

    const body = {
      notes: {
        address: shipping_address._id,
      },
      receipt: "recipt_#1",
      address: shipping_address._id,
    };
    try {
      const res = await dispatch(createPayNowOrder(body)).unwrap();
      const { paymentIntent, _id } = res;
      console.log(res);
      const {
        id,
        amount,
        amount_paid,
        amount_due,
        currency,
        receipt,
        entity,
        offer_id,
        attempts,
        status,
        notes,
        created_at,
      } = paymentIntent;
      const options = {
        key: "rzp_test_0VIkjqfMFMpUYa",
        amount: `${amount}`,
        currency,
        name: "Rai Appliances",
        description: "test",
        image:
          "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
        order_id: id,
        handler: async (success: onPaymentSuccess) => {
          const body = {
            paymentIntent: {
              ...paymentIntent,
              amount_paid: amount,
              amount_due: 0,
              status: "paid",
              ...success,
            },
          };
          try {
            const update = await dispatch(
              updatePaymentIntent({
                paymentIntent: body.paymentIntent,
                id: _id,
              })
            ).unwrap();
            redirectToOrders(update);
          } catch (error: any) {
            toast.error(error.message);
          }
        },
        prefill: {
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes,
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new Razorpay(options);
      razor.on("payment.failed", function (response: any) {
        console.log("failed", " ", response);
      });
      razor.open();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function cod_Order() {
    if (!shipping_address) {
      toast.error("address not selected");
      return;
    }
    const body = {
      receipt: "recipt_#1",
      notes: {
        address: shipping_address._id,
      },
      address: shipping_address._id,
    };
    try {
      const cod = await dispatch(createPayOnDeliveryOrder(body)).unwrap();
      redirectToOrders(cod);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    function cartTotal() {
      let amount = 0;
      for (const item of cart) {
        if (typeof item.product === "object" && item.product.price) {
          amount = amount + item.product.price;
        } else {
          // throw new Error("did not get product price ");
          toast.error("try again later");
          navigate("cart");
        }
      }
      setTotalAmount(amount);
    }
    cartTotal();
  }, [cart]);
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <Container className="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="w-100">
            <CartItems />
          </div>
          {!isError && cart?.length && (
            <>
              <div className="col-12 col-lg-6">
                <div className="checkout-left-data">
                  <div className="d-flex justify-content-start gap-2 py-2">
                    <h4>Shipping Address</h4>
                    <button
                      className="px-2 py-1 rounded-3"
                      onClick={() => setAddress_modal(true)}
                    >
                      new address
                    </button>
                  </div>
                  <div className="d-flex gap-15 flex-wrap  justify-content-between ">
                    <div className="w-100">
                      <div className="w-100">
                        <h6>Selected Address</h6>
                        <ul className="list-group">
                          {shipping_address ? (
                            Object.keys(shipping_address)?.map((key, j) => {
                              if (!addressKeys.includes(key)) return null;
                              return (
                                <li
                                  className="list-group-item d-flex justify-content-between align-items-center"
                                  key={j}
                                >
                                  <label
                                    className="px-2 py-1 mx-2"
                                    htmlFor={key}
                                  >
                                    {key}
                                  </label>
                                  <span className="px-2 py-1 mx-2">
                                    {shipping_address[key]}
                                  </span>
                                </li>
                              );
                            })
                          ) : (
                            <p>not selected</p>
                          )}
                        </ul>
                      </div>
                      {!address_modal ? (
                        <>
                          <h6>Choose Address </h6>
                          <Address
                            setAddress_modal={setAddress_modal}
                            onClick={(address) => setShipping_address(address)}
                          />
                        </>
                      ) : (
                        <Address_form
                          close={setAddress_modal}
                          action={"CREATE"}
                        />
                      )}
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center  ">
                        <Link to="/cart" className="text-dark  ">
                          <BiArrowBack className="me-2 " />
                          Return to Cart
                        </Link>

                        {/* <Link to="/" className="button">
                      Continue to Shipping
                    </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-end align-items-center ">
                <div className="border-bottom py-4  w-100 ">
                  <div className="d-flex justify-content-between  align-items-center">
                    <p className="total">SubTotal</p>
                    <p className="total-price">{totalAmount}</p>
                  </div>
                  <div className="d-flex justify-content-between  align-items-center">
                    <p className="mb-0 total">Shipping</p>
                    <p className="mb-0 total-price">0</p>
                  </div>
                </div>
                <div className=" w-100 d-flex justify-content-between  border-bottom py-4  align-items-center">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">{totalAmount}</h5>
                </div>
                <div className=" w-100 d-flex justify-content-end pt-2 gap-2">
                  <button
                    onClick={() => proceedToPayment()}
                    type="button"
                    className="button"
                  >
                    Pay now
                  </button>
                  <button
                    onClick={() => cod_Order()}
                    type="button"
                    className="button"
                  >
                    Pay on delivery
                  </button>
                </div>
              </div>
            </>
          )}
          {isLoading && <p>Loading</p>}
          {isError && <p>something went wrong</p>}
        </div>
      </Container>
    </>
  );
};

export default Checkout;

export interface onPaymentSuccess {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
