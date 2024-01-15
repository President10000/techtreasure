import React, { useEffect } from "react";
import { getFeaturedProducts } from "../../../features/featuredProducts/featuredProductSlice";
import { useDispatch, useSelector } from "react-redux";
import SpecialProduct from "../../../components/specialProduct/SpecialProduct";
const DealOfTheDay = () => {
  const section = "deal of the day";

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
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Deal Of The Day</h3>
        </div>
      </div>
      <div className="row ">
        {products?.map((item, i) => {
          return <SpecialProduct productdata={item} key={i} />;
        })}
      </div>
    </>
  );
};

export default DealOfTheDay;
