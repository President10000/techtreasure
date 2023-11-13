import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="filter-card mb-3 ">
              <h3 className="filter-title">Find By Category</h3>
              <div className="">
                <ul className="ps-0 d-flex flex-md-column gap-2 gap-md-0 mb-0">
                  <li className="list">Price</li>
                  <li className="list">Brand</li>
                  <li className="list">Color</li>
                  <li className="list">Size</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
