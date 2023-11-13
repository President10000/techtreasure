import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

// import watch2 from "../images/watch-2.jpg";
import { featured_collections } from "../utils/Data";

const ProductCard = (props) => {
  // console.log(props);
  let location = useLocation();

  const { grid } = props;

  return (
    <>
      {featured_collections.map((item, i) => {
        const {price, title, desc, wish, watch, prodcompare, view, addcart } = item;
        return (
          <div
            key={i}
            className={`${
              location.pathname == "/product" ? `gr-${grid}` : "col-6 col-md-4 col-lg-3"
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
              <div className="">
                <img src={watch} className="img-fluid" alt="product image" />
                {/* <img src={watch2} className="img-fluid" alt="product image" /> */}
              </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
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
                  {desc}
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
