import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import "./productcard.css";

import { productcartimg } from "../../utils/Data.jsx";
import { demoData } from "../../utils/Data.jsx";

const ProductCard = (props) => {
  const { prodcompare, view, addcart, wish, watch, watch2 } = productcartimg;
  const { demoDescription, demoTitle, demoPrice, demoBrand } = demoData;
  let location = useLocation();
  const { grid, data } = props;

  if (location.pathname === "/" || location.pathname === "/product/:id") {
    // If the current route is the home page, render the HomeProductCard component.
    return (
      <div
        className={`${
          location.pathname == "/product"
            ? `gr-${grid}`
            : "col-6 col-md-4 col-lg-3"
        }`}
        // className=""
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id "
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative "
        >
          <div className="wishlist-icon position-absolute ">
            <button className="border-0 bg-transparent ">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">{demoBrand}</h6>
            <h5 className="product-title">{demoTitle}</h5>
            <ReactStars
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}>
              {demoDescription}
            </p>
            <p className="price">${demoPrice}.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15 ">
              <button className="border-0 bg-transparent ">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={addcart} alt="cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => {
        const { brand, title, price, images, description } = item;
        return (
          <div
            key={index}
            className={`${
              location.pathname == "/product"
                ? `gr-${grid}`
                : "col-6 col-md-4 col-lg-3"
            }`}
            // className=""
          >
            <Link
              to={`${
                location.pathname == "/"
                  ? "/product/:id "
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}
              className="product-card position-relative "
            >
              <div className="wishlist-icon position-absolute ">
                <button className="border-0 bg-transparent ">
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={watch || images?.[0].url}
                  className="img-fluid"
                  alt="product image"
                />
                <img src={watch2} className="img-fluid" alt="product image" />
              </div>
              <div className="product-details">
                <h6 className="brand">{brand}</h6>
                <h5 className="product-title">{title}</h5>
                <ReactStars
                  edit={false}
                  value={3}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none "
                  }`}
                >
                  {description}
                </p>
                <p className="price">${price}.00</p>
              </div>
              <div className="action-bar position-absolute ">
                <div className="d-flex flex-column gap-15 ">
                  <button className="border-0 bg-transparent ">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent ">
                    <img src={view} alt="view" />
                  </button>
                  <button className="border-0 bg-transparent ">
                    <img src={addcart} alt="cart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;

// responsive complete
