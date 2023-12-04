import {
  Button,
  Stack,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" style={{
      // backgroundColor: "#0C356A",
    }}>
      <Container>
        <Navbar.Brand style={{
          // color: "#fff"
        }} href="/">
          {/* <img src="assets/images/logo.png" /> */}
          <p style={{
            color: "#0C356A",
            fontWeight: "bolder",
            // fontFamily: "monospace",
            letterSpacing: 3,
            // fontSize: 30,
          }}>SURFING</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav fil className="justify-content-end" style={{
            marginRight: 80,
          }}>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link href="#" style={{
                color: "#0C356A",
                fontWeight: "bold",
              }}>Biography</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#0C356A",
                fontWeight: "bold",
              }} href="#">Offers</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#0C356A",
                fontWeight: "bold",
              }} href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#0C356A",
                fontWeight: "bold",
              }} href="#">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
