import React, { useState } from 'react';
import styles from './ListaProductos.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProducto from '../AddProducto/AddProducto';
//import Datosproductos from './Datosproductos.js';
  const ListaProductos = () => {
  //state
  const datosProductosJson= JSON.parse(localStorage.getItem("productos"))
  const [datosProductos, setDatosProductos]=useState(datosProductosJson)


  //eliminar producto
  const eliminarProducto= (id)=>{
   const listaProductosNew = datosProductos.filter(
      (producto)=>(producto.nombre !== id)
    )
    localStorage.clear();
  setDatosProductos(listaProductosNew)

  }

  const modificarProducto=(ModificarProducto)=>{
    localStorage.setItem("productoModificar",JSON.stringify(ModificarProducto))
  }

 

 

 return(
  <>
  <div className={styles.wrapper}>
  {
   datosProductos.map(
    (producto)=>{
      return(
        
       <Card className={styles.ListaProductos} style={{ width: '18rem'}}>
      <Card.Img style={{ height:'10rem', width:'14rem' }} variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          <p>id:{producto.id}</p>
        <p>{producto.descripcion}</p>
        <h5>Precio: {producto.precio} us$</h5>
        <h5>Stock: {producto.stock}</h5>
        </Card.Text>
        <Button variant="primary" onClick={
                      ()=>{
                        modificarProducto(producto)
                        window.location.href="/Modificar"
                      }
                      }
        >Editar</Button>{"  "}
        <Button variant="danger " onClick={
                      ()=>{
                         eliminarProducto(producto.nombre)
                         }}>Eliminar</Button>

                         <div className={styles.botonmargin}>
                         <Button variant="success" onClick={
                      ()=>{
                        alert("Producto añadido")
                         }}>Agregar al Carrito</Button>
                         </div>
      </Card.Body>
    </Card>
      );  
  })}
  </div>
  <AddProducto />
   
  </>  
 )
  
};
export default ListaProductos;
