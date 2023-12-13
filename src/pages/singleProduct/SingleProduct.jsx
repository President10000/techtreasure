import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

import ProductCard from "../../components/productCard/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import Color from "../../components/Color";
import { IoGitCompare } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../../components/Container";
import "./singleproduct.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const SingleProduct = () => {
  let { id } = useParams();
  // console.log(process.env.GET_PRODUCT_API_BY_ID);

  const [product, setProduct] = useState();

  const [img_index, setImg_index] = useState(0);
  const [pri_img, setPri_img] = useState({
    width: 600,
    height: 600,
    zoomWidth: 600,
    img: null,
  });

  async function getApi() {
    try {
      const api = await fetch(`http://localhost:5000/api/product/${id}`);
      const jsonApi = await api.json();
      setPri_img({ ...pri_img, img: jsonApi.images.primary[0].url });
      setProduct(jsonApi);
    } catch (error) {
      throw new Error("internal server error");
    }
  }

  useEffect(() => {
    getApi();
  }, [id]);

  const [orderedProducts, setOrderedProducts] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  function nextImg() {
    if (img_index < product.images.primary.length - 1) {
      setPri_img((pre) => {
        return { ...pre, img: product.images.primary[img_index + 1].url };
      });
      setImg_index((pre) => pre + 1);
    }
  }

  function preImg() {
    if (img_index > 0) {
      setPri_img((pre) => {
        return { ...pre, img: product.images.primary[img_index - 1].url };
      });
      setImg_index((pre) => pre - 1);
    }
  }



  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      {product && pri_img.img ? (
        <>
          <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
              {/* left side of the main product section  */}
              <div className="col-12 col-lg-6 ">
                <div className="main-product-image">
                  <div className="position-relative">
                    <ReactImageZoom {...pri_img} />
                    <button
                      className="position-absolute start-0 top-50"
                      onClick={() => preImg()}
                    >
                      pre
                    </button>
                    <button
                      className="position-absolute end-0 top-50"
                      onClick={() => nextImg()}
                    >
                      next
                    </button>
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
                      <ReactStars
                        edit={false}
                        value={3}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      />
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
                          >
                            {" "}
                          </span>
                        );
                      })}
                    </div>
                    <div className="d-flex align-items-center  gap-15 flex-row  mt-2 mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-md-row py-5 gap-2">
                        <h3 className="product-heading">Quantity :</h3>
                        <div className="">
                          <input
                            className="form-control"
                            type="number"
                            min={1}
                            max={10}
                            style={{ width: "70px" }}
                            id=""
                          />
                        </div>
                      </div>
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
                            {" "}
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
                        href="javascript:void(0);"
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
          <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p>{product.description.head_desc}</p>{" "}
                </div>
                <div>
                  <ul>
                    {product.description.sub_desc?.map((desc, i) => {
                      return (
                        <li key={i} style={{ listStyle: "none" }}>
                          {" "}
                          {desc.key}:{desc.value}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          {/* review section */}
          <Container id="review" class1="review-wrapper pb-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h3>Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
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
                    </div>
                    {/* <div>
                  {orderedProducts && (
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  )}
                </div> */}
                  </div>
                  {/* <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <ReactStars
                    edit={true}
                    value={3}
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end ">
                    <button className="button border-0 ">Submit Review</button>{" "}
                  </div>
                </form>
              </div> */}
                  <div className="reviews mt-4 ">
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
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <h3 style={{ color: "red" }}> Internal server error </h3>
      )}

      {/* popular section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
