
import "./home.css";
import "./famouscard.css";
import Container from "../../components/Container";

import { Banner_primery } from "../../utils/images_import";
import FiftyPercentOFF from "./sub_comps/FiftyPercentOFF";
import DealOfTheDay from "./sub_comps/DealOfTheDay";
import ServiceCarosal from "./sub_comps/ServiceCarosal";
import React from "react";
import { sections } from "../../features/featuredProducts/featuredProductSlice";

const Home = () => {

 

  return (
    <>
      <Container class1="home-wrapper-1 py-3 ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 row-6 overflow-hidden" style={{maxHeight:"300px"}}>
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

      <Container class1="home-wrapper-2 py-5">
       <ServiceCarosal/>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2 ">
        <FiftyPercentOFF section={sections[0]}/>
      </Container>


      <Container class1=" special-wrapper py-5 home-wrapper-2">
       <DealOfTheDay section={sections[1]}/>
      </Container>

  



    </>
  );
};

export default Home;
