import { Link } from "react-router-dom";
import "./blogcard.css";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            src="/images/blog-1.jpg"
            className="img-fluid w-100 "
            alt="blog"
          />
        </div>
        <div className="blog-content ">
          <p className="date">3 Dec, 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            quasi corru
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
