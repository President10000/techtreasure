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
            <ProductCard
              grid={
                window.innerWidth > 1000 ? 3 : window.innerWidth < 600 ? 12 : 6
              }
              productdata={products}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default FeaturedLayoutOne;
