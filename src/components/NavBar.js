import CartWidget from "./CartWidget";

/* const NavBAr = () => {
    return (
    <div>
        <CartWidget />
    </div>
    );
    
};

export default NavBAr; */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <div>
        <CartWidget />
        </div>
        </Container>
      </Navbar>
    </>
    
  );
}

export default ColorSchemesExample;