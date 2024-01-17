import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../features/product/productSlice";
import { getProductsByCategory } from "../../features/productsByCategory/productByCategorySlice";

import "./ourstore.css";
import Filter from "./Filter";
import Sort_Products from "./Sort_Products";
const OurStore = () => {
  const query = new URLSearchParams(window.location.search);
  const category = query.get("category");
  const [grid, setGrid] = useState(
    window.innerWidth > 1000 ? 4 : window.innerWidth < 600 ? 12 : 6
  );

  const productState = useSelector((state) => state.product.products);
  const refresh = useSelector((state) => state.productBycategory.refresh);
  const products = useSelector(
    (state) => state.productBycategory.products[`${category.toLowerCase()}`]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    function getproducts() {
      if (category && !products) {
        dispatch(getProductsByCategory(category.toLowerCase()));
      } 
    }
    getproducts();
  }, [dispatch, category, products, refresh]);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-3 ">
        <div className="row">
          <div className="mb-2 col-12 col-lg-3 d-flex flex-column align-item-center justify-content-start row-gap-2">
            <Filter />
          </div>
          <div className="col-12 col-lg-9">
            <div className="filter-sort-grid mb-4">
              <Sort_Products setGrid={setGrid} />
            </div>
            <div className="products-list pb-5 ">
              <div className="d-flex gap-1 flex-wrap justify-content-center">
                {category ? (
                  <ProductCard
                    grid={grid}
                    productdata={products ? products : []}
                  />
                ) : (
                  <ProductCard
                    grid={grid}
                    productdata={productState ? productState : []}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
