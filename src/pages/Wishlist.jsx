import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist "} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative ">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute img-fluid  cross"
              />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="wishlist" />
              </div>
            </div>
            <div className="wishlist-details py-3 px-3">
              <h5 className="title">
                Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet
              </h5>
              <h6 className="price">$ 100.00</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative ">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute img-fluid  cross"
              />

              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="wishlist" />
              </div>
            </div>
            <div className="wishlist-details py-3 px-3">
              <h5 className="title">
                Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet
              </h5>
              <h6 className="price">$ 100.00</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative ">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute img-fluid  cross"
              />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="wishlist" />
              </div>
            </div>
            <div className="wishlist-details py-3 px-3">
              <h5 className="title">
                Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet
              </h5>
              <h6 className="price">$ 100.00</h6>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
