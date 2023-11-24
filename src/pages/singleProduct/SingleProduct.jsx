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

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const imgArray = [
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    },
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    },
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    },
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    },
  ];
  const product = {
    title: " Kids Headphones Bulk 10pack Multi colored for Students",
    img: imgArray,
    review: { average: 3, count: 10 },
    metadata: [
      {
        key: "Type",
        value: "Watch",
      },
      {
        key: "Brand",
        value: "Havells",
      },
      {
        key: "Tags",
        value: "Watch",
      },
      {
        key: "Availablity",
        value: "In stock",
      },
    ],
    colors: [
      { color: "red", qty: 10 },
      { color: "white", qty: 10 },
      { color: "blue", qty: 10 },
      { color: "green", qty: 10 },
    ],
    sizes: [
      { size: "S", qty: 10 },
      { size: "M", qty: 10 },
      { size: "L", qty: 10 },
      { size: "XL", qty: 10 },
    ],
  };

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

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* left side of the main product section  */}
          <div className="col-12 col-lg-6 ">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="d-flex flex-wrap  gap-10 justify-content-evenly ">
              {imgArray.map((img, i) => {
                return (
                  <div key={i} className="col-3 col-md-2 ">
                    <img
                      src={`${img.img}`}
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                );
              })}
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
                    value={product.review.average}
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">
                    ( {product.review.count}Reviews)
                  </p>
                </div>
              </div>
              <div className=" py-3 ">
                {product.metadata.map((meta, i) => {
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit eligendi nesciunt suscipit adipisci dolorum beatae
                aliquid sit. Illum, eligendi sed non praesentium eveniet
                possimus blanditiis assumenda veritatis nobis impedit at.
              </p>{" "}
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
                      value={3}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  {orderedProducts && (
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
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
              </div>
              <div className="reviews mt-4 ">
                <div className="review ">
                  <div className="d-flex gap-10 align-items-center ">
                    <h6 className="mb-0">Vihan</h6>
                    <ReactStars
                      edit={false}
                      value={3}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam fugit libero natus blanditiis, ratione accusamus
                    rem delectus reiciendis enim ullam, consequatur repellat
                    ipsum quasi officiis reprehenderit sed a cupiditate ea!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
