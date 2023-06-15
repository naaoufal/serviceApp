import CardComponent from "../../components/CardComponent";
import NavBarComponent from "../../components/NavbarComponent";

const DATA = [
  { id: 1, name: "Services" },
  { id: 2, name: "Culture" },
  { id: 3, name: "Tourisme" },
  { id: 4, name: "Evenements" },
  { id: 5, name: "Sports" },
  { id: 6, name: "Gallery" },
];

const HomeScreen = () => {
  return (
    <div>
      <NavBarComponent />
      <div
        style={{
          height: "50px",
          backgroundColor: "light",
        }}
      ></div>
      {/* services icons */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="row"
          style={{
            width: "90%",
          }}
        >
          {DATA &&
            DATA?.map((element) => (
              <div className="col-md-4">
                <CardComponent element={element} />
              </div>
            ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default HomeScreen;
