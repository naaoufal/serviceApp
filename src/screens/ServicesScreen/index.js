import NavBarComponent from "../../components/NavbarComponent";
import CarImage from "../../assets/images/car-image.png";

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
        <div className="row">
          <div
            className="col-sm-3"
            style={
              {
                //   border: "1px solid #000",
                //   display: "flex",
                //   flexDirection: "column",
              }
            }
          >
            <div class="card" style={{}}>
              <img src={CarImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
