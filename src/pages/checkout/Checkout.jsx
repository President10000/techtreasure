import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../../images/watch.jpg";
import Container from "../../components/Container";
import "./checkout.css";
import Address from "../profile/subComponent/Address";
import Address_form from "../profile/subComponent/Address_form";
import CartItems from "../../components/cartItem/CartItems";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import Razorpay from "razorpay";
const Checkout = () => {
  const [address_modal, setAddress_modal] = useState(false);
  const { cart, isSuccess } = useSelector((state) => state.cartSlice);
  const [shipping_address, setShipping_address] = useState();

  async function proceedToPayment() {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/razorpay/create-order`,
        { notes: {}, receipt: "recipt_#1" },
        config
      );
      const {
        id,
        entity,
        amount,
        amount_paid,
        amount_due,
        currency,
        receipt,
        offer_id,
        status,
        attempts,
        notes,
        created_at,
      } = res.paymentIntent;
      const options = {
        key: "rzp_test_0VIkjqfMFMpUYa",
        amount,
        currency,
        name: "Rai Appliances",
        description: "test",
        image: "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
        order_id: id,
        handler: async (success) => {
          const body = {
            paymentIntent: {
              ...res.paymentIntent,
              amount_paid: amount,
              amount_due: 0,
              status: "paid",
              ...success,
            },
          };
          const update = await axios.put(
            `http://localhost:5000/api/user/order/update-order/${res._id}`,
            body,
            config
          );
          console.log("success", update);
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
      razor.on("payment.failed", function (response) {
        console.log(response);
      });
      razor.open();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="w-100">
            <CartItems />
          </div>
          {cart?.products?.length ? (
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
                    <p className="total-price">{cart.cartTotal}</p>
                  </div>
                  <div className="d-flex justify-content-between  align-items-center">
                    <p className="mb-0 total">Shipping</p>
                    <p className="mb-0 total-price">0</p>
                  </div>
                </div>
                <div className=" w-100 d-flex justify-content-between  border-bottom py-4  align-items-center">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">{cart.cartTotal}</h5>
                </div>
                <div className=" w-100 d-flex justify-content-end pt-2">
                  <button
                    onClick={() => proceedToPayment()}
                    type="button"
                    className="button"
                  >
                    Proceed To Payment
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Checkout;
