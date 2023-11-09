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
      backgroundColor: "#0C356A",
    }}>
      <Container>
        <Navbar.Brand style={{
          color: "#fff"
        }} href="/">LOGO</Navbar.Brand>
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
                color: "#fff"
              }}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#fff"
              }} href="#">Offeres</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#fff"
              }} href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
              <Nav.Link  style={{
                color: "#fff"
              }} href="#">Contacter Nous</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
