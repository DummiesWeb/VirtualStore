import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './register.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { nombre, contraseña, correo } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (nombre !== "" && contraseña !== "" && correo !== "") {
      const Usuario = {
        nombre,
        correo,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/register", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({ nombre: "", contraseña: "", correo: "" });
          setTimeout(() => {
            setMensaje("");
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });

      setLoading(false);
    }
  };

  return (
 
    <Container className={styles.container}>
      <Row>
        <Col></Col>
         <Col>
        
        <Card style={{ width: '20rem' }} className={styles.card}>
        <h3 className='d-flex justify-content-center'>Bienvenido a la pagina</h3>
        <h2 className='d-flex justify-content-center'>De Registro!</h2>
        <Card.Body>
        <form onSubmit={(e) => onSubmit(e)}>
          <div >
            <div>
              <label htmlFor="nombre" className='d-flex justify-content-center'>Nombre</label>
              <div className='d-flex justify-content-center'>
              <input className='bg-info mx-2 my-1'
                onChange={(e) => HandleChange(e)}
                value={nombre}
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre..."
                autoComplete="off" />
              </div>
            </div>
           
          </div>

          <div >
            <div >
              <label htmlFor="correo" className='d-flex justify-content-center'>Correo</label>
              <div className='d-flex justify-content-center'>
              <input className='bg-info mx-2 my-1'
                onChange={(e) => HandleChange(e)}
                value={correo}
                name="correo"
                id="correo"
                type="email"
                placeholder="Correo..."
                autoComplete="off"
              />
              </div>
            </div>
           
          </div>

          <div >
            <div >
              <label htmlFor="contraseña" className='d-flex justify-content-center'>Contraseña</label>
              <div className='d-flex justify-content-center'>
              <input className=' bg-info mx-2 my-1 '
                onChange={(e) => HandleChange(e)}
                value={contraseña}
                name="contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña..."
                autoComplete="off"
              />
              </div>
            </div>
            
          </div>
          <div className='d-flex justify-content-center' >
          <Button variant="secondary" type="submit" >
            {loading ? "Cargando..." : "Registrarme"}
          </Button>
          </div>
          <p className='my-2'>
            Ya tienes una cuenta?{" "}
            <b onClick={() => navigate("/")}>Inicia Sesión!</b>
          </p>
        </form>
        </Card.Body>
        </Card>
      
      {mensaje && <div >{mensaje}</div>}

        </Col>
        <Col></Col>
      </Row>
    </Container>
 
  )
  };
  export default Register;

