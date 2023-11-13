import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Color from "../../components/Color";
import Container from "../../components/Container";
import "./wishlist_compare.css";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative ">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute img-fluid  cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet
                </h5>
                <h6 className="price mb-3 mt-3 ">$ 100.00</h6>
                <div>
                  <div className="product-detail ">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Type:</h5>
                    <p className="mb-0">Tablet Computer</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Availability:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail  ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative ">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute img-fluid  cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet
                </h5>
                <h6 className="price mb-3 mt-3 ">$ 100.00</h6>
                <div>
                  <div className="product-detail ">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Type:</h5>
                    <p className="mb-0">Tablet Computer</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Availability:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-detail  ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail  ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
