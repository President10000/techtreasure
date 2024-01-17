import ReactStars from "react-rating-stars-component";
import { Link} from "react-router-dom";
import "./productcard.css";

import { productcartimg } from "../../utils/Data.jsx";

import IndividualProduct from "./IndividualProduct.jsx";

const ProductCard = ({ grid, productdata }) => {

  return (
    <>
      {productdata?.map((item, index) => {
        return (
          <IndividualProduct grid={grid}  productdata={item} key={index}/>
        );
      })}
    </>
  );
};

export default ProductCard;
