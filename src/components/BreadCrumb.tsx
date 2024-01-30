import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb:React.FC<{title:string}> = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb mb-0 py-1">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 " style={{fontSize:'small'}}>
              <Link to="/" className="text-dark" >
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
