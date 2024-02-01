// import ReactStars from "react-rating-stars-component";
import { Link} from "react-router-dom";
import "./productcard.css";

// import { productcartimg } from "../../utils/Data.js";

import IndividualProduct from "./IndividualProduct.jsx";
import React from "react";
import { product } from "../../utils/types";

const ProductCard:React.FC<{grid?:number,productdata:product[]}> = ({ grid=3, productdata }) => {

  return (
    <>
      {productdata?.map((item, index) => {
        return (
          <IndividualProduct grid={grid}  product={item} key={index}/>
        );
      })}
    </>
  );
};

export default ProductCard;
