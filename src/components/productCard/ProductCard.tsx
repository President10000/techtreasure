import { Link } from "react-router-dom";
import "./productcard.css";
import React from "react";
import { product } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import {
  addOrRemoveWish,
  filter_wishlist,
  push_wishlist,
} from "../../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { TbJewishStarFilled } from "react-icons/tb";

const ProductCard: React.FC<{ grid?: number; productdata: product[] }> = ({
  grid = 3,
  productdata,
}) => {
  const dispatch = useAppDispatch();
  const addtoWish = async (product: product) => {
    try {
      const res = await dispatch(addOrRemoveWish(product._id)).unwrap();
      if (res.status === "added") {
        dispatch(push_wishlist([{ ...res.wish, product: product }]));
        toast.info("added to wishlist");
      } else if (res.status === "removed") {
        dispatch(filter_wishlist([product._id]));
        toast.info("removed from wishlist");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {productdata?.map((item, i) => {
        const { brand, title, price, images, description, quantity } = item;
        return (
          <div
            key={i}
            className={`gr-${grid} individual-product  position-relative`}
          >
            <Link to={`/product/${item._id}`} className="product-card ">
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
                  {title.length > 50 ? title.slice(0, 50) + "..." : title}
                </h5>
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none "
                  }`}
                >
                  {description.head_desc}
                </p>
                <span className="d-flex justify-content-between align-item-center">
                  <p className="price">${price}.00</p>
                  <p>
                    {quantity
                      ? quantity < 20
                        ? `only ${quantity} available`
                        : null
                      : "out of stock"}
                  </p>
                </span>
              </div>
            </Link>
            <div className="action-bar position-absolute ">
              <button className="border-0 bg-transparent ">
                {/* <img src={addcart} alt="cart" /> */}
              </button>
              <button
                onClick={() => addtoWish(item)}
                className="border-0 bg-transparent "
              >
                <TbJewishStarFilled className="text-primary" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
