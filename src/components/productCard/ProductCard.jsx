import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import "./productcard.css";

import { productcartimg } from "../../utils/Data.jsx";
import { demoData } from "../../utils/Data.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../features/product/productSlice.js";

const ProductCard = ({ grid, productdata }) => {
  const { prodcompare, view, addcart, wish, watch, watch2 } = productcartimg;
  const { demoDescription, demoTitle, demoPrice, demoBrand } = demoData;
  let location = useLocation();

  const dispatch = useDispatch();

  const addtoWish = (prodId) => {
    // console.log(id);
    dispatch(addToWishlist(prodId));
  };

  if (location.pathname === "/" || location.pathname === "/product/:id") {
    // If the current route is the home page, render the HomeProductCard component.
    const { brand, title, price, images, description }=productdata
    return (
      <div
        className={`${
          location.pathname == "/product"
            ? `gr-${grid}`
            : "col-6 col-md-4 col-lg-3"
        }`}
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
              {/* <img src={wish} alt="wishlist" /> */}w
            </button>
          </div>
          <div className="product-image">
            {/* <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" /> */}
            <img
                  src={images.primary[0].url}
                  className="img-fluid"
                  alt="product image"
                />
                <img
                  src={images.primary[0].url}
                  className="img-fluid"
                  alt="product image"
                />
          </div>
          <div className="product-details">
            <h6 className="brand">{brand}</h6>
            <h5 className="product-title">  {title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
            <ReactStars
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}>
            {description.head_desc}
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
  }

  return (
    <>
      {productdata?.map((item, index) => {
        const { brand, title, price, images, description } = item;
        // console.log(index == 0 && item);
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
              // to={`${
              //   location.pathname == "/"
              //     ? "/product/:id "
              //     : location.pathname == "/product/:id"
              //     ? "/product/:id"
              //     : ":id"
              // }`}
              to={`/product/${item._id}`}
              className="product-card position-relative "
            >
              <div className="wishlist-icon position-absolute ">
                <button
                  className="border-0 bg-transparent "
                  onClick={() => addtoWish(item?._id)}
                >
                  {/* <img src={images.primary[0].url} alt="wishlist" /> */}
                  w
                </button>
              </div>
              <div className="product-image">
                {/* <div className=""> */}
                <img
                  src={images.primary[0].url}
                  className="img-fluid"
                  alt="product image"
                />
                <img
                  src={images.primary[0].url}
                  className="img-fluid"
                  alt="product image"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{brand}</h6>
                <h5 className="product-title">
                  {title.length > 50 ? title.slice(0, 50) + "..." : title}
                </h5>
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
                  {description.head_desc}
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
