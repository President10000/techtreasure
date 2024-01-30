import React, { useEffect } from "react";
import { features, getFeaturedProducts } from "../../../features/featuredProducts/featuredProductSlice";
// import { useDispatch, useSelector } from "react-redux";
import IndividualProduct from "../../../components/productCard/IndividualProduct";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import IndividualProduct from "../../../components/productCard/ProductCard";
interface props{
  section:features
}
const FiftyPercentOFF:React.FC<props> = ({section}) => {
  // const section = "50%off";
const grid=window.innerWidth>1000?4:window.innerWidth>600?6:12
  const products = useAppSelector(
    (state) => state.featuredProductSlice.products[`${section}`]
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    function getproducts() {
      if (section && !products) {
        dispatch(getFeaturedProducts(section));
      }
    }
    getproducts();
  }, [dispatch,section, products]);
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading">{section.toUpperCase()}</h3>
      </div>
      {products?.map((item, i) => {
      return  <IndividualProduct grid={grid} productdata={item} key={i}  />
      })}
    </div>
  );
};

export default FiftyPercentOFF;
