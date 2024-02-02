import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import Container from "../../components/Container";
import "../ourstore/ourstore.css";
import Filter from "../ourstore/Filter";
import Sort_Products from "../ourstore/Sort_Products";
import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import React from "react";
import { useAppSelector } from "../../app/hooks";
const Search = () => {
  const query = new URLSearchParams(window.location.search);
  const title = query.get("title");
  const [product, setProducts] = useState([]);
  const [grid, setGrid] = useState(
    window.innerWidth > 1000 ? 4 : window.innerWidth < 600 ? 12 : 6
  );
  const refresh = useAppSelector((state) => state.product.byCategory.refresh); // when only query changes react components does not rerender automatically, so to rerender this components refresh is required
  useEffect(() => {
    async function fetch() {
      try {
        const data = await axios.get(
          `${base_url}search/product?title=${title}`
        );
        setProducts(data.data);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    fetch();
  }, [title, refresh]);
  return (
    <Container className="store-wrapper home-wrapper-2 py-3 ">
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
              {product.length ? (
                <ProductCard grid={grid} productdata={product} />
              ) : (
                <p>could not found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
