import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import blog from "../images/blog-1.jpg";

import { Link } from "react-router-dom";
import Container from "../components/Container";
import { AiOutlineArrowLeft } from "react-icons/ai";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10  ">
                {" "}
                <AiOutlineArrowLeft className="fs-6" />
                Go back to blog
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img style={{maxHeight:'500px',}} src={blog} className="img-fluid w-100 my-4  " alt="blog" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                natus sapiente tempore iusto, fugit aperiam dicta nulla neque
                aut, in autem dolorem, voluptatibus qui optio. Rem voluptatibus
                debitis aut eveniet! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illum natus sapiente tempore iusto, fugit
                aperiam dicta nulla neque aut, in autem dolorem, voluptatibus
                qui optio. Rem voluptatibus debitis aut eveniet!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
