import { useEffect, useState } from "react";
import services from "../../../utils/Data";
const ServiceCarosal = () => {
    const [service_transition, setService_transition] = useState(0);
    const [transitionLength, setTransitionLength] = useState(
      window.innerWidth < 600 ? 840 : 440
    );
  
    useEffect(() => {
      function transition() {
        setTransitionLength(window.innerWidth < 600 ? 840 : 440);
      }
      addEventListener("resize", transition);
      return () => {
        removeEventListener("resize", transition);
      };
    }, []);
  return (
    <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center flex-column gap-10">
            <div className="services position-relative gap-5 gap-md-15 d-flex overflow-hidden  align-items-center justify-content-around">
              {console.log(transitionLength)}
              {services?.map((service, index) => {
                return (
                  <div
                    style={{
                      translate: `${service_transition * transitionLength}px`,
                      transitionDuration: "1000ms",
                    }}
                    className="col-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center gap-15"
                    key={index}
                  >
                    <img className="" src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0"> {service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 px-3 py-2">
              {[2, 1, 0, -1, -2].map((num, i) => {
                return (
                  <button
                    onClick={() => setService_transition(num)}
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor:
                        service_transition == num ? "greenyellow" : "gray",
                      borderRadius: "100px",
                    }}
                    key={i}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
  )
}

export default ServiceCarosal
