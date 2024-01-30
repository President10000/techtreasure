import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./wishlist_compare.css";
import { toast } from "react-toastify";
import { filter_wishlist, getWishlist } from "../../features/wishlist/wishlistSlice";
import { addOrRemoveWish } from "../../features/wishlist/wishlistSlice";
import React from "react";
import { string } from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { wishlist, isSuccess, isError } = useAppSelector((state) => state.wishlist);
  const user = useAppSelector((state) => state.auth.user);
  const removefromWishlist = async (id:string) => {
    try {
      const payload  = await dispatch(addOrRemoveWish(id)).unwrap();
      if (payload.status === "removed") {
        dispatch(filter_wishlist([id]));
        toast.info("removed from wishlist");
      } else {
        throw new Error("something went wrong");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    const getWishlistFormDb = () => {
      if (!isSuccess && user) {
        dispatch(getWishlist("wishlist"));
      }
    };

    getWishlistFormDb();
  }, [dispatch, isSuccess, user]);

  return (
    <>
      {user ? (
        <>
          <Meta title={"Wishlist "} />
          <BreadCrumb title="Wishlist" />
          <Container className="wishlist-wrapper home-wrapper-2 py-5 ">
            <div className="row flex-wrap">
              {!isSuccess && (
                <div className="col-12 text-center py-5">
                  <h4 className="text-danger">
                    {isError
                      ? "something went wrong"
                      : "loading....."}
                  </h4>
                </div>
              )}
              {wishlist?.map((item, index) => {
                if(typeof item.product!=="object")return null
                const { images,title,price } = item.product;
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
                          src={`${images.primary[0].url}`}
                          alt="wishlist"
                          className="col-12"
                        />
                      </div>
                    </div>
                    <div className="wishlist-details py-3 px-3">
                      <h5 className="title">{title}</h5>
                      <h6 className="price">$ {price}.00</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Wishlist;
