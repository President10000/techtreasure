import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const Wishlist = () => {
  const wishlist_Product_API = [
    {
      img: "images/watch.jpg",
      title: " Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet",
      price: " 100",
    },
    {
      img: "images/watch.jpg",
      title: " Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet",
      price: " 100",
    },
    {
      img: "images/watch.jpg",
      title: " Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet",
      price: " 100",
    },
    {
      img: "images/watch.jpg",
      title: " Honor T1 7.0 2GB RAM 8Gb ROM 7inch with wi-fi Tablet",
      price: " 100",
    },
  ];

  return (
    <>
      <Meta title={"Wishlist "} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5 ">
        <div className="row flex-wrap">
          {wishlist_Product_API.map((pro, i) => {
            
            return (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="wishlist-card position-relative ">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute img-fluid  cross"
                  />
                  <div className="wishlist-card-image overflow-hidden">
                    <img
                      src={`${pro.img}`}
                      alt="wishlist"
                      className="col-12"
                    />
                  </div>
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">
                    {pro.title}
                  </h5>
                  <h6 className="price">$ {pro.price}.00</h6>
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
