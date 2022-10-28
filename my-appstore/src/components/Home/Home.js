import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Home}>
     <Container>
     <Row>
        <Col>1 of 3</Col>
        <Col xs={6} className="justify-content-center pt-5 mt-4 mr-1">
          <div  className={styles.formulario}>
          <Form  action=''>
          <h1 className='text-light mb-3 text-center mx-sm-5 pt-3'>INICIAR SESIÓN</h1>
          <Form.Group className="mb-3 text-center mx-sm-5 pt-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingrese Usuario" className={styles.formcontrol}/>
      </Form.Group>
      <Form.Group className="mb-3 text-center mx-sm-5 pt-3 " controlId="formBasicPassword">
        <Form.Control  type="password"   placeholder="Ingrese contraseña" className={styles.formcontrol} />
      </Form.Group>
      <div className="d-grid gap-2  mx-sm-5 pt-4">
      <Button className={styles.ingresar}  size="sm" type="submit">
        ingresar
      </Button>
      </div>
      
          </Form>
          </div>
        </Col>
        <Col>3 of 3</Col>
      </Row>

     </Container>
  </div>
);


export default Home;
