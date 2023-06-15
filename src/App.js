import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Stack,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import NavBarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import HomeScreen from "./screens/HomeScreen";
import CardComponent from "./components/CardComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesScreen from "./screens/ServicesScreen";

function App() {
  return (
    // <div>
    //   <HomeScreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/service/type" element={<ServicesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
