import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const TermAndConditions = () => {
  return (
    <>
      {" "}
      <Meta title={"Term And Conditions "} />
      <BreadCrumb title="Term & Conditions " />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Terms and Conditions</h2>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
