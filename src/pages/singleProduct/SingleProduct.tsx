import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

// import ProductCard from "../../components/productCard/ProductCard";
// import ReactStars from "react-rating-stars-component";
// @ts-ignore
import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import { IoGitCompare } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../../components/Container";
import "./singleproduct.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { base_url } from "../../utils/axiosConfig";
import React from "react";
import { product } from "../../utils/types";
import { toast } from "react-toastify";
const SingleProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState<product>();

  const [img_index, setImg_index] = useState(0);
  const copyToClipboard = (text: string) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };


  useEffect(() => {
    async function getApi() {
      try {
        const api = await fetch(`${base_url}product/${id}`);
        const jsonApi = await api.json();
        setProduct(jsonApi);
      } catch (error) {
        toast.error("internal server error");
      }
    }
    getApi();
  }, [id]);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      {product ? (
        <>
          <Container className="main-product-wrapper py-1 home-wrapper-2">
            <div className="row">
              {/* left side of the main product section  */}
              <div
                className="col-12 col-lg-6 d-flex justify-content-center align-items-center"
                style={{ maxHeight: "540px", overflow: "hidden" }}
              >
                <div className="main-product-image">
                  <div className="position-relative">
                    <img
                      style={{ maxHeight: "400px" }}
                      src={product.images.primary[img_index].url}
                      alt=""
                    />
                    <span className="position-absolute bottom-0 w-100 d-flex justify-content-center align-items-center gap-2">
                      {product.images.primary.map((data, i) => {
                        return (
                          <button
                            onClick={() => setImg_index(i)}
                            key={i}
                            type="button"
                            style={{
                              padding: "10px",
                              backgroundColor:
                                i == img_index ? "lightblue" : "",
                            }}
                            className={`rounded-2 border-2 border-secondry`}
                          ></button>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </div>
              {/* right side of the main product section  */}
              <div className="col-12 col-lg-6">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="title">{product.title}</h3>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price">$ 100</p>
                    <div className="d-flex align-items-center  gap-10">
                      {/* <ReactStars
                        edit={false}
                        value={3}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      /> */}
                      <p className="mb-0 t-review">
                        ( {100}
                        Reviews)
                      </p>
                    </div>
                  </div>
                  <div className=" py-3 ">
                    {product.meta_data.map((meta, i) => {
                      return (
                        <div
                          key={i}
                          className="d-flex gap-10 align-items-center my-2 "
                        >
                          <h3 className="product-heading">{meta.key}:</h3>
                          <p className="product-data">{meta.value}</p>
                        </div>
                      );
                    })}

                    {!!product.sizes?.length && (
                      <div className="d-flex gap-10 mt-2 mb-3 ">
                        <h3 className="product-heading">Size :</h3>
                        <div className="d-flex flex-wrap gap-15">
                          {product.sizes.map((size, i) => {
                            return (
                              <span
                                key={i}
                                className="badge border border-1 bg-white text-dark border-secondary"
                              >
                                {size.size}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    {!!product.colors?.length && (
                      <div className="d-flex gap-10  mt-2 mb-3 ">
                        <h3 className="product-heading">Color :</h3>
                        {product.colors.map((color, i) => {
                          return (
                            <span
                              key={i}
                              className="rounded-5"
                              style={{
                                backgroundColor: `${color.color}`,
                                height: "20px",
                                width: "20px",
                              }}
                            ></span>
                          );
                        })}
                      </div>
                    )}
                    <div className="d-flex align-items-center  gap-15 flex-row  mt-2 mb-3">
                      <div className=" cart-button d-flex align-items-center gap-10  ">
                        {["Add to Cart", "Buy Now"].map((item, i) => {
                          return (
                            <button key={i} className="button" type="submit">
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="d-flex align-items-center  gap-15">
                      {[
                        { Comp: IoGitCompare, text: "Add to Compare" },
                        { Comp: AiOutlineHeart, text: "Add to Wishlist" },
                      ].map((item, i) => {
                        return (
                          <div key={i}>
                            <a
                              href="#"
                              className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2"
                            >
                              <item.Comp className="fs-5 me-2" />{" "}
                              <span>{item.text}</span>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="d-flex  gap-10  flex-column  my-3 ">
                      <h3 className="product-heading">Shipping & Returns:</h3>
                      <p className="product-data">
                        Free shipping and returns available on all orders!
                        <br />
                        We ship all US domestic orders within{" "}
                        <b>5-10 business days!</b>
                      </p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3 ">
                      <h3 className="product-heading">Product Link:</h3>
                      <button
                        className="button"
                        // href="javascript:void(0);"
                        onClick={() => {
                          copyToClipboard(
                            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                          );
                        }}
                      >
                        Copy Product Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          {/* description section */}
          <Container className="description-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p>{product.description.head_desc}</p>
                </div>
                <div>
                  <ul className="list-group">
                    {product.description.sub_desc?.map((desc, i) => {
                      return (
                        <li className="list-group-item " key={i}>
                          <p>
                            {desc.key} : {desc.value}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          {/* review section */}
          <Container className="review-wrapper pb-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h3>Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    {/* <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center  gap-10">
                        <ReactStars
                          edit={false}
                          value={product.feedback?.summery?.avarage_rating}
                          count={5}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">
                          Based on {product.feedback?.summery?.total_rating}{" "}
                          Reviews
                        </p>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="reviews mt-4 ">
                    {product?.feedback?.data.map((item, i) => {
                      const { images, comment, rating, postedby } = item;
                      return (
                        <div key={i} className="review ">
                          <div className="d-flex gap-10 align-items-center ">
                            <h6 className="mb-0">{postedby}</h6>
                            {rating?.value ? (
                              <ReactStars
                                edit={false}
                                value={rating.value}
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                              />
                            ) : (
                              "NA"
                            )}
                          </div>
                          <ul className="d-flex gap-2">
                            {images?.map((img, i) => {
                              return (
                                <li
                                  key={i}
                                  style={{
                                    listStyle: "none",
                                    width: "100px",
                                    overflow: "hidden",
                                    height: "100px",
                                  }}
                                >
                                  <img src={img.img} width={100}></img>
                                </li>
                              );
                            })}
                          </ul>
                          <p className="mt-3">
                            {" "}
                            {comment?.value ? comment.value : "NA"}
                          </p>
                        </div>
                      );
                    })}
                  </div> */}
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <h3 style={{ color: "red" }}> Loading... </h3>
      )}

      {/* popular section */}
      <Container className="popular-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Recomended</h3>
          </div>
        </div>
        <div className="row">
          {/* <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
