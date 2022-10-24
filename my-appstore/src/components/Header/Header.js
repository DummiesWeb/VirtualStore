import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
        <div className='container-fluid'>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kwik-E-Mart</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link href="/">Inicio🏠</Nav.Link>
                <Nav.Link href="/ListaProductos">Lista Productos</Nav.Link>
                <Nav.Link href="#pricing"> Agregar</Nav.Link>
                <Nav.Link href="#pricing"> Lista Ventas</Nav.Link>
                <Nav.Link href="#pricing"> Carrito🛒</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
  </div>
);

export default Header;
