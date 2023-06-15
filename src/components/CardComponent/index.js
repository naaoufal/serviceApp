import { useEffect } from "react";
import {
  Button,
  Stack,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Card,
  Spinner,
} from "react-bootstrap";
import { ArrowRight, Cart2, Link } from "react-bootstrap-icons";
import Logo from "../../assets/images/icon-test.png";
import { useNavigate } from "react-router-dom";

const CardComponent = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("this is work", props);
    navigate("service/type", props?.element);
  };

  return (
    <div
      // className="col-md-4"
      onClick={() => handleClick()}
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          width: "110px",
          height: "110px",
        }}
        src={Logo}
      />
      <text
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {props?.element?.name}
      </text>
    </div>
  );
};

export default CardComponent;
