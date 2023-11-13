import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../../images/wish.svg";
import watch from "../../images/watch.jpg";
import watch2 from "../../images/watch-2.jpg";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import { useEffect } from "react";
import "./productcard.css";
const ProductCard = (props) => {
  // console.log(props);
  let location = useLocation();

  const { grid, data } = props;

  if (location.pathname === "/") {
    // If the current route is the home page, render the HomeProductCard component.
    return (
      <div
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
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
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack Multi colored for students
            </h5>
            <ReactStars
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              recusandae cumque veritatis voluptatum modi. Provident aliquam
              nisi ullam! Enim minus
            </p>
            <p className="price">$100.00</p>
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
      {/* {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
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
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_5.png?v=1655537950"
                  className="img-fluid"
                  alt="product image"
                />
                <img src={watch2} className="img-fluid" alt="product image" />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  edit={false}
                  value={+item?.totalrating}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none "
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
                <p className="price">${item?.price}</p>
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
      })} */}
    </>
  );
};

export default ProductCard;