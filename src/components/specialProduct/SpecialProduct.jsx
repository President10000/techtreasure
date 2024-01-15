import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./specialproduct.css";
// import "../productCard/productcard.css";
const SpecialProduct = ({productdata}) => {
  const {local_price, brand, title, price, images, description }=productdata
  return (
    <div className="col-12 col-md-6 col-lg-6 col-xxl-6  mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between ">
          <div>
            <img src={images.primary[0].url} className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h5 className="title"> {title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
            {/* <ReactStars
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ffd700"
            /> */}
            <p className="price">
              <span className="red-p">${price}</span> &nbsp; <strike>${local_price}</strike>
            </p>
            {/* <div className="discount-till d-flex align-items-center gap-10  ">
              <p className="mb-0">
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div> */}
            {/* <div className="prod-count my-3 ">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div> */}
            <Link className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;

// responsive complete
