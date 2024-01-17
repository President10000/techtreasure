import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { addToWishlist, filter_wishlist, push_wishlist } from "../../features/user/userSlice.js";
import { TbJewishStarFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { productcartimg } from "../../utils/Data.jsx";
const IndividualProduct = ({ grid, productdata }) => {
  const { addcart } = productcartimg;
  const { brand, title, price, images, description } = productdata;


  const dispatch = useDispatch();
  const addtoWish = async(product) => {
   try {
    const {payload}=await dispatch(addToWishlist(product._id));
   if(payload.status==="added"){
    dispatch(push_wishlist([product]))
     toast.info("added to wishlist");
    }else if(payload.status==="removed"){
      dispatch(filter_wishlist([product._id]))
     toast.info("removed from wishlist");
   }else{
    throw new Error("something went wrong")
   }
   } catch (error) {
    toast.error(error.message);
   }
  };



  return (
    <div className={`gr-${grid} individual-product  position-relative`}>
      <Link to={`/product/${productdata._id}`} className="product-card ">
        <div className="product-image">
          {images?.primary?.map((img, i) => {
            return (
              <img
                key={i}
                src={img.url}
                className="img-fluid"
                alt="product image"
              />
            );
          })}
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">
            {" "}
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </h5>
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
      </Link>
      <div className="action-bar position-absolute ">
        <button className="border-0 bg-transparent ">
          <img src={addcart} alt="cart" />
        </button>
        <button onClick={()=>addtoWish(productdata)} className="border-0 bg-transparent ">
          <TbJewishStarFilled className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default IndividualProduct;
