import logo from "../../assets/img/logo/logo-hamburguer.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// INICIO - CARTA - RECETAS - RESERVA - CONTACTO

export const NavBar = ({ login, user, logOut }) => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="./carta">
                Carta
              </Nav.Link>
              <Nav.Link as={Link} to="./recetas">
                Recetas
              </Nav.Link>
              <Nav.Link as={Link} to="./reserva">
                Reserva
              </Nav.Link>
              <Nav.Link as={Link} to="./contacto">
                Contacto
              </Nav.Link>
            </Nav>
            <Button variant="outline-warning" as={Link} to="/reserva">
            Reserva aquí!
            </Button>{" "}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
