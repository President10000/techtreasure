import React, { useEffect } from "react";
import {
  features,
  getFeaturedProducts,
} from "../../../features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductCard from "../../../components/productCard/ProductCard";
import Container from "../../../components/Container";
interface props {
  section: features;
}
const FeaturedLayoutOne: React.FC<props> = ({ section }) => {
  // const section = "50%off";
  const grid = window.innerWidth > 1000 ? 4 : window.innerWidth > 600 ? 6 : 12;
  const products = useAppSelector(
    (state) => state.product.featured.products[`${section}`]
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    function getproducts() {
      if (section && !products) {
        dispatch(getFeaturedProducts(section));
      }
    }
    getproducts();
  }, [dispatch, section, products]);
  return (
    <>
      {!!products?.length && (
        <Container className="featured-wrapper py-5 home-wrapper-2 ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">{section.toUpperCase()}</h3>
            </div>
            <ProductCard productdata={products} />
          </div>
        </Container>
      )}
    </>
  );
};

export default FeaturedLayoutOne;
