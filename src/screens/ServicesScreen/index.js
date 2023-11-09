import NavBarComponent from "../../components/NavbarComponent";
import CarImage from "../../assets/images/car-image.png";
import ServiceCardComponent from "../../components/ServiceCardComponent";

const ServicesScreen = (props) => {
  console.log("props", props);

  return (
    <div>
      <NavBarComponent />
      {/* search bar */}
      <div
        className="container"
        style={{
          marginTop: "20px",
        }}
      >
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            @
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>
      {/* content field */}
      <div
        // className="container"
        style={{
          marginTop: "30px",
          marginLeft: "4%",
          marginRight: "4%",
        }}
      >
        <text
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#27374D",
          }}
        >
          Services :
        </text>
        <div>
          <ServiceCardComponent />
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
