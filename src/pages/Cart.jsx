import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../images/watch.jpg";

import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            {/* cart header here */}
            <div className="cart-header d-flex py-3  justify-content-between align-items-center  ">
              <h4 className="col-4">Product</h4>
              <h4 className="col-2">Price</h4>
              <h4 className="col-3">Quantity</h4>
              <h4 className="col-2">Total</h4>
            </div>
            {/* cart data here */}
            <div className="cart-data d-flex  py-3 mb-2 justify-content-between align-items-center ">
              <div className=" gap-10 d-flex flex-column flex-lg-row align-items-center col-4">
                <div className="w-75 w-lg-25 position-relative">
                  <img
                    src={watch}
                    alt="product image "
                    className="img-fluid "
                  />
                  <button className="position-absolute top-0 start-0">
                    <AiFillDelete className="text-danger " />
                  </button>
                </div>
                <div className="fs-6">
                  <p className="mb-0">GFFGDFA</p>
                  <p className="mb-0">Size: hgd</p>
                  <p className="mb-0">Color: gjg</p>
                </div>
              </div>
              <div className="col-2">
                <h5 className="price">$ 100.00</h5>
              </div>
              <div className="  d-flex align-items-center gap-15 col-3">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
              </div>
              <div className=" col-2">
                <h5 className="price">$ 100.00</h5>
              </div>
            </div>
            {/* second time cart copy here */}
          </div>
          <div className="col-12 py-2 mt-4  ">
            <div className="d-flex justify-content-between align-items-baseline  ">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>

              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 1000 </h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
