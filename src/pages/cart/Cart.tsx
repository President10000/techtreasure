import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import "./cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../../components/cartItem/CartItems";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, isSuccess } = useAppSelector((state) => state.cartSlice);
  const user = useAppSelector((state) => state.auth.user);
  const [totalAmount, setTotalAmount] = useState<number>();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    function cartTotal() {
      let amount = 0;
      for (const item of cart) {
        if (typeof item.product === "object" && item.product.price) {
          amount = amount + item.product.price;
        } else {
          throw new Error("did not get product price ");
        }
      }
      setTotalAmount(amount)
    }
    cartTotal();
  }, [cart]);

  return (
    <>
      {user ? (
        <>
          <Meta title={"Cart"} />
          <BreadCrumb title="Cart" />
          <Container className="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12">
                <CartItems />
                {/* <p>
                  {isSuccess ? (
                    <>{!cart?.length ? "cart is empty" : null}</>
                  ) : (
                    "Loading"
                  )}
                </p> */}
              </div>
              <div className="col-12 py-2 mt-4  ">
                <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-baseline  ">
                  <span className="w-100">
                    <Link to="/" className="button ">
                      Continue To Shopping
                    </Link>
                  </span>

                  {totalAmount && (
                    <div className="d-flex flex-column align-items-end w-100 text-end">
                      <h4>SubTotal: $ {totalAmount} </h4>
                      <p>Taxes and shipping calculated at checkout</p>
                      <Link to="/checkout" className="button">
                        Checkout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Cart;
