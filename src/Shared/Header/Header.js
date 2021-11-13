import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Pages/hooks/useAuth/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
          Cool Cars BD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={HashLink} to="/exploreCars">
              Explore
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={HashLink} to="/home#reviews">
              Reviews
            </Nav.Link>
            <Nav.Link as={HashLink} to="/ContactUs">
              Contact Us
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link as={HashLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Button variant="light" onClick={logout}>
                  Logout
                </Button>
                <Navbar.Text className="ms-2">
                  Hlw: {user.displayName}
                  <span className="text-light fw-bold"></span>
                </Navbar.Text>
              </>
            ) : (
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
