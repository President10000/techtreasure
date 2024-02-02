// // import ReactStars from "react-rating-stars-component";
// // import { Link } from "react-router-dom";
// import "./specialproduct.css";
// // import { useDispatch } from "react-redux";
// import {
//   postProductToCart,
//   replaceOrAdd_OneItemInCart,
// } from "../../features/cart/cartSlice";
// import { toast } from "react-toastify";
// import React from "react";
// import { useAppDispatch } from "../../app/hooks";
// import { product } from "../../utils/types";
// // import "../productCard/productcard.css";
// const SpecialProduct: React.FC<{ product: product }> = ({ product }) => {
//   const dispatch = useAppDispatch();
//   if (!product) return null;
//   const { local_price, brand, title, price, images, description, _id } =
//     product;

//   async function handleAddtoCartBtn() {
//     try {
//       const res = await dispatch(
//         postProductToCart({ product_id: _id, quantity: 1 })
//       ).unwrap();
//       toast.success("added to cart");
//       dispatch(replaceOrAdd_OneItemInCart(res));
//       // console.log(payload)
//     } catch (error: any) {
//       console.error(error.message);
//     }
//   }

//   return (
//     <div className="col-12 col-md-6 col-lg-6 col-xxl-6  mb-3">
//       <div className="special-product-card">
//         <div className="d-flex justify-content-between gap-2 ">
//           <div>
//             <img
//               src={images?.primary[0].url}
//               className="img-fluid"
//               alt="watch"
//             />
//           </div>
//           <div className="special-product-content">
//             <h5 className="brand">{brand}</h5>
//             <h5 className="title">
//               {title.length > 50 ? title.slice(0, 50) + "..." : title}
//             </h5>
//             <p className="price">
//               <span className="red-p">${price}</span> &nbsp;
//               <p>${local_price}</p>
//             </p>

//             <button className="button" onClick={() => handleAddtoCartBtn()}>
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialProduct;

// // responsive complete
