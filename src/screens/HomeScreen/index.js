import CardComponent from "../../components/CardComponent";
import CarouselComponent from "../../components/CarouselComponent";
import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavbarComponent";
import BiographyScreen from "../BiographyScreen";
import OfferScreen from "../Offers";
import SponsorScreen from "../SponsorScreen";

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
      {/* Slider Images */}
      <CarouselComponent />
      {/* our offers */}
      <OfferScreen />
      {/* Biography */}
      <BiographyScreen />
      {/* sponsor */}
      <SponsorScreen />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
