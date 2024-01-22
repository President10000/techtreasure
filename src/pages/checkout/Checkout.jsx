import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../../images/watch.jpg";
import Container from "../../components/Container";
import "./checkout.css";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row flex-wrap-reverse">
          <div className="col-12 col-lg-6">
            <div className="checkout-left-data">
              {/* <h3 className="website-name">TechTreasure</h3> */}
              {/* <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active ">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav> */}
              {/* <h4 className="title total">Contact Informaiton</h4>
              <p className="user-details total">
                Vishal Patel (vishalpatel@gmail.com)
              </p> */}
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap  justify-content-between "
              >
                <div className="w-100">
                  <select
                    name=""
                    defaultValue={"DEFAULT"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="DEFAULT" disabled>
                      Select Country
                    </option>
                    <option value="india">India</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Phone no."
                    className="form-control"
                  />
                </div>

                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <Link to="/cart" className="text-dark  ">
                      <BiArrowBack className="me-2 " />
                      Return to Cart
                    </Link>

                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="border-bottom py-4 ">
              <div className="d-flex gap-10 mb-2 align-items-center  ">
                <div className="d-flex w-75  gap-10">
                  <div className="w-25 position-relative  ">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute "
                    >
                      1
                    </span>
                    <img src={watch} alt="product img" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">dsafa</h5>
                    <p className="total-price">s / 3jsdlfjasklf</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4 ">
              {" "}
              <div className="d-flex justify-content-between  align-items-center">
                <p className="total">SubTotal</p>
                <p className="total-price">$ 1000</p>
              </div>
              <div className="d-flex justify-content-between  align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between  border-bottom py-4  align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
