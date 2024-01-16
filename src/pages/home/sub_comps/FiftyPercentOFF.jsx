import React, { useEffect } from "react";
import { getFeaturedProducts } from "../../../features/featuredProducts/featuredProductSlice";
import { useDispatch, useSelector } from "react-redux";
import IndividualProduct from "../../../components/productCard/IndividualProduct";
// import IndividualProduct from "../../../components/productCard/ProductCard";
const FiftyPercentOFF = () => {
  const section = "50%off";
const grid=window.innerWidth>1000?4:window.innerWidth>600?6:12
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
      return  <IndividualProduct grid={grid} productdata={item} key={i}  />
      })}
    </div>
  );
};

export default FiftyPercentOFF;
