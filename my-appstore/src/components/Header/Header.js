import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';

const Header = () => (
  <div>
        <div className={styles.Header}>
          <Navbar className={styles.Header} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Kwik-E-Mart</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link href="/">Inicio🏠</Nav.Link>
                <Nav.Link href="/productos">Lista Productos📒</Nav.Link>
                <Nav.Link href="/ListaVentas"> Lista Ventas</Nav.Link>
                <Nav.Link href="/CarCompras"> Carrito🛒</Nav.Link>
                <div className={styles.botoncontainer}> <h3>👉</h3>
                <Button variant="outline-secondary ms-auto"  href='/registro'>Regitrarse</Button>
                </div >
              </Nav>
            </Container>
          </Navbar>
          </div>
  </div>
);

export default Header;
