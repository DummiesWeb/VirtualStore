import React from 'react';
import styles from './ListaProductos.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{ useState } from 'react';
import Datosproductos from './Datosproductos.js';

const ListaProductos = () => {
  const [Datos, setDatos]=useState(Datosproductos)
 return(
  <div className={styles.wrapper}>
  {
  Datos.map(
    (producto)=>{
      return(
        <div>
        <Card className={styles.ListaProductos} style={{ width: '18rem'}}>
      <Card.Img style={{ height:'10rem' }} variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
        <p>{producto.descripcion}</p>
        <h5>Precio: {producto.precio} us$</h5>
        <h5>Stock: {producto.stock}</h5>
        </Card.Text>
        <Button variant="primary">Editar</Button>
        <Button variant="danger ">Eliminar</Button>
      </Card.Body>
    </Card>
    </div>
      );
      
  }
  )
  }
  </div>
 )
  
};
export default ListaProductos;
