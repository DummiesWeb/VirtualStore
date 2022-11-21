
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Home.module.css';

const Home = () =>{ 

  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/login", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
           localStorage.setItem("token", data?.usuario.token);
            navigate(`/Productos`);
          }, 2500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Correo u contraseña incorrecta");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };
  
   
  
  return (
  <div className={styles.Home}>
     <Container>
     <Row>
        <Col>1 of 3</Col>
        <Col xs={6} className="justify-content-center pt-5 mt-4 mr-1">
          <div  className={styles.formulario}>
          <div >
        <h3 className='d-flex justify-content-center'>Bienvenido a la pagina</h3>
        <h2 className='d-flex justify-content-center'>De Inicio de Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div >
            <div>
              <label htmlFor="correo" className='d-flex justify-content-center'>Correo</label>
              <input className={styles.formcontrol}
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

          <div >
            <div >
              <label htmlFor="contraseña" className='d-flex justify-content-center'>Contraseña</label>
              <input className={styles.formcontrol}
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
          <div className='d-flex justify-content-center my-3'>
          <Button type="submit" className='btn btn-primary' >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </Button>
          </div>
          <p className='d-flex justify-content-center my-2'>
            Aun no tienes cuenta?{" "}
            <b onClick={() => navigate("/productos")}>Registrate!</b>
          </p>
        </form>
      </div>

      {mensaje && <div >{mensaje}</div>}
  
          </div>
        </Col>
        <Col>3 of 3</Col>
      </Row>

     </Container>
  </div>
);
  };

export default Home;
