import "./home.css";
import "./famouscard.css";
import Container from "../../components/Container";
import {
  Banner_01,
  Banner_02,
  Banner_primery,
} from "../../utils/images_import";
import FeaturedLayoutOne from "./sub_comps/FeaturedLayoutOne";
import FeaturedLayoutTwo from "./sub_comps/FeaturedLayoutTwo";
import ServiceCarosal from "./sub_comps/ServiceCarosal";
import React from "react";
import { sections } from "../../features/product/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="home-wrapper-1 py-3 ">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-sm-12 row-6 overflow-hidden"
            style={{ maxHeight: "300px" }}
          >
            <div className="main-banner position-relative  ">
              <img
                src={Banner_primery}
                className="rounded-3"
                alt="main banner"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="home-wrapper-2 py-5">
        <ServiceCarosal />
      </Container>
      <div className="py-5 d-flex justify-content-evenly align-items-center flex-wrap col-12 gap-3">
        {[Banner_01, Banner_02].map((banner, i) => {
          return (
            <Link
              to={""}
              key={i}
              className="col-8 col-md-4 rounded-2 overflow-hidden"
            >
              <img
                src={banner}
                alt="banner_1"
                className="col-12"
                style={{ objectFit: "cover" }}
              />
            </Link>
          );
        })}
      </div>
      {sections.slice(0, 1)?.map((section, i) => {
        return <FeaturedLayoutOne key={i + section} section={section} />;
      })}
      {sections.slice(1, 2)?.map((section, i) => {
        return <FeaturedLayoutTwo key={i + section} section={section} />;
      })}
    </>
  );
};

export default Home;
