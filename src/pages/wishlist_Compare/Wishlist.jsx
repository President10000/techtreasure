import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishlist_compare.css";
import { getUserProductWishlist } from "../../features/user/userSlice";
import { addToWishlist } from "../../features/product/productSlice";
const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFormDb();
  }, []);

  const getWishlistFormDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  const removefromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  // console.log("wishlistState", wishlistState);

  return (
    <>
      <Meta title={"Wishlist "} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5 ">
        <div className="row flex-wrap">
          {wishlistState?.length === 0 && (
            <div className="col-12 text-center py-5">
              <h4 className="text-danger">
                No Item in Wishlist or loading.....
              </h4>
            </div>
          )}
          {wishlistState.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="wishlist-card position-relative ">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute img-fluid  cross"
                    onClick={() => removefromWishlist(item?._id)}
                  />
                  <div className="wishlist-card-image overflow-hidden">
                    <img
                      src={`${
                        // item.images[0].url
                        //   ? item.images[0].url
                        //   :
                        "images/watch.jpg"
                      }`}
                      alt="wishlist"
                      className="col-12"
                    />
                  </div>
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">{item?.title}</h5>
                  <h6 className="price">$ {item?.price}.00</h6>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
