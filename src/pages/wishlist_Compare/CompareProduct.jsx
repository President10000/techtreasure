import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
// import { productsToCompare } from "../../utils/Data";
import "./wishlist_compare.css";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5 ">
        <div className="row row-gap-4">
          <p className="d-lg-none ">Desktop mode recomended </p>
          {/* {productsToCompare.map((pro, i) => {
            return (
              <div key={i} className="col-12 col-md-4 col-lg-3">
                <div className="compare-product-card position-relative ">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute img-fluid  cross"
                  />
                  <div className="product-card-image">
                    <img className="col-12" src={`${pro.img}`} alt="watch" />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">{pro.title}</h5>
                    <h6 className="price mb-3 mt-3 ">$ {pro.price}.00</h6>
                    <div>
                      {pro.meta_data.map((meta, i) => {
                        return (
                          <div key={i} className="product-detail ">
                            <h5>{meta.key}:</h5>
                            <p className="mb-0">{meta.value}</p>
                          </div>
                        );
                      })}

                      <div className="product-detail  ">
                        <h5>Color:</h5>
                        <ul className="d-flex gap-2">
                          {pro.colors.map((item, i) => {
                            console.log(item);
                            return (
                              <li
                                key={i}
                                className=" rounded-5"
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  backgroundColor: `${item}`,
                                  listStyle: "none",
                                }}
                              ></li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="product-detail  ">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          {pro.sizes.map((size, i) => {
                            return <p key={i}>{size}</p>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;

// responsive complete code
