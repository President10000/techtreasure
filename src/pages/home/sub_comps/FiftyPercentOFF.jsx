import React, { useEffect } from "react";
import { getFeaturedProducts } from "../../../features/featuredProducts/featuredProductSlice";
import { useDispatch, useSelector } from "react-redux";
import IndividualProduct from "../../../components/productCard/IndividualProduct";
const FiftyPercentOFF = () => {
  const section = "50%off";

  const products = useSelector(
    (state) => state.featuredProductSlice.products[`${section}`]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    function getproducts() {
      if (section && !products) {
        dispatch(getFeaturedProducts(section.toLowerCase()));
      }
    }
    getproducts();
  }, [dispatch, products]);
  console.log(products);
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading">50% OFF</h3>
      </div>
      {products?.map((item, i) => {
      return  <IndividualProduct grid={4} productdata={item} key={i}  />
      })}
    </div>
  );
};

export default FiftyPercentOFF;
