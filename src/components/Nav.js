import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Forecaster</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
