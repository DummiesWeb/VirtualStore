import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

const Header = () => (
  <div>
        <div className={styles.Header}>
          <Navbar className={styles.Header} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Kwik-E-Mart</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link href="/Home">Inicio🏠</Nav.Link>
                <Nav.Link href="/ListaProductos">Lista Productos</Nav.Link>
                <Nav.Link href="/ListaVentas"> Lista Ventas</Nav.Link>
                <Nav.Link href="/CarCompras"> Carrito🛒</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
  </div>
);

export default Header;
