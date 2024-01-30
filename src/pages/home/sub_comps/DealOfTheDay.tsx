import React, { useEffect } from "react";
import { features, getFeaturedProducts } from "../../../features/featuredProducts/featuredProductSlice";
import { useDispatch, useSelector } from "react-redux";
import SpecialProduct from "../../../components/specialProduct/SpecialProduct";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface props{
  section:features
}

const DealOfTheDay:React.FC<props> = ({section}) => {
  // const section = "deal of the day";

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
  }, [dispatch, products,section]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">{section.toUpperCase()}</h3>
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
