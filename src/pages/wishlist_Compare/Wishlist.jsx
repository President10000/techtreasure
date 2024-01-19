import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./wishlist_compare.css";
import { toast } from "react-toastify";
import { filter_wishlist, getWishlist } from "../../features/user/userSlice";
import { addToWishlist } from "../../features/user/userSlice";
const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { wishlist, isSuccess } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const removefromWishlist = async (id) => {
    try {
      const { payload } = await dispatch(addToWishlist(id));
      if (payload.status === "removed") {
        dispatch(filter_wishlist([id]));
        toast.info("removed from wishlist");
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getWishlistFormDb = () => {
      if (!isSuccess.wishlist) {
        dispatch(getWishlist("wishlist"));
      }
    };

    getWishlistFormDb();
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <>
          <Meta title={"Wishlist "} />
          <BreadCrumb title="Wishlist" />
          <Container class1="wishlist-wrapper home-wrapper-2 py-5 ">
            <div className="row flex-wrap">
              {wishlist?.length === 0 && (
                <div className="col-12 text-center py-5">
                  <h4 className="text-danger">
                    No Item in Wishlist or loading.....
                  </h4>
                </div>
              )}
              {wishlist?.map((item, index) => {
                const { images } = item;
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
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">$ {item?.price}.00</h6>
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
