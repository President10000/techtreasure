import React, { useEffect } from "react";
import {
  features,
  getFeaturedProducts,
} from "../../../features/product/productSlice";
import './F_LayoutTwo.css'
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Container from "../../../components/Container";
import { postProductToCart, replaceOrAdd_OneItemInCart } from "../../../features/cart/cartSlice";
import { toast } from "react-toastify";

interface props {
  section: features;
}

const FeaturedLayoutTwo: React.FC<props> = ({ section }) => {

  const products = useAppSelector(
    (state) => state.product.featured.products[`${section}`]
  );
  
  const dispatch = useAppDispatch();

  async function handleAddtoCartBtn(_id:string) {
    try {
      const res = await dispatch(
        postProductToCart({ product_id: _id, quantity: 1 })
      ).unwrap();
      toast.success("added to cart");
      dispatch(replaceOrAdd_OneItemInCart(res));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    function getproducts() {
      if (section && !products) {
        dispatch(getFeaturedProducts(section));
      }
    }

    getproducts();
  }, [dispatch, products, section]);
  return (
    <>
      {!!products?.length && (
        <Container className="featured-wrapper py-5 home-wrapper-2 ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">{section.toUpperCase()}</h3>
            </div>
          </div>
          <div className="row ">
            {products?.map((item, i) => {
                const { local_price, brand, title, price, images, description, _id } =
                item;
              return <div key={i} className="col-12 col-md-6 col-lg-6 col-xxl-6  mb-3">
              <div className="special-product-card">
                <div className="d-flex justify-content-between gap-2 ">
                  <div>
                    <img
                      src={images?.primary[0].url}
                      className="img-fluid"
                      alt="product image not loaded"
                    />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">{brand}</h5>
                    <h5 className="title">
                      {title.length > 50 ? title.slice(0, 50) + "..." : title}
                    </h5>
                    <p className="price">
                      <span className="red-p">${price}</span> &nbsp;
                      <span>${local_price}</span>
                    </p>
                    
                    <button className="button" onClick={() => handleAddtoCartBtn(_id)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>;
            })}
          </div>
        </Container>
      )}
    </>
  );
};

export default FeaturedLayoutTwo;



