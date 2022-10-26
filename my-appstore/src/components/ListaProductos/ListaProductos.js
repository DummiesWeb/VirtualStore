import React from 'react';
import styles from './ListaProductos.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import{ useState } from 'react';
import Datosproductos from './Datosproductos.js';

//import { v4 as uuidv4 } from 'uuid';
  const ListaProductos = (props) => {
  //state
  const [Datos, setDatos]=useState(Datosproductos)

  const [newProducto, setNewProducto]= useState({ img:"", nombre:"", descripcion:"", precio:"", stock:""})
  // añadir campo por campo
  const modificarNombre= (nombreNew)=>{
    setNewProducto({nombre:nombreNew})
  }
  
  const modificarDescripcion= (descripcionNew)=>{
    setNewProducto({descripcion:descripcionNew})
  }

  const modificarPrecio= (precioNew)=>{
    setNewProducto({precio:precioNew})
  }
 
  const modificarStock= (stockNew)=>{
    setNewProducto({stock:stockNew})
  }

  //eliminar producto
  const eliminarProducto= (id)=>{
   const listaProductosNew = Datos.filter(
      (producto)=>(producto.id !== id)
    )
  setDatos(listaProductosNew)

  }

  //añadir nuevo producto

  const addProducto=()=>{
    setDatos([...Datos, newProducto])

  }

 

 return(
  <>
  <div className={styles.wrapper}>
  {
   Datos.map(
    (producto)=>{
      return(
        <div key={producto.id}>
        <Card className={styles.ListaProductos} style={{ width: '18rem'}}>
      <Card.Img style={{ height:'10rem', width:'14rem' }} variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
        <p>{producto.descripcion}</p>
        <h5>Precio: {producto.precio} us$</h5>
        <h5>Stock: {producto.stock}</h5>
        </Card.Text>
        <Button variant="primary">Editar</Button>{"  "}
        <Button variant="danger " onClick={ ()=>{
          eliminarProducto(producto.id)}
        } >Eliminar</Button>
      </Card.Body>
    </Card>
    </div>
      );  
  }
  )
  }
  </div>

  <div className={styles.formulario}>
    <Form  onSubmit={
          (e)=>{
            addProducto(e)
          }
        }>
    <input placeholder="Ingrese nombre del producto"  className="form-control mb-2" name="nombre"  onChange={
                                (e)=>{modificarNombre(e.target.value)}
                            }></input>
    <input placeholder="Ingrese descripción"  className="form-control mb-2" name="nombre"  onChange={
                                (e)=>{modificarDescripcion(e.target.value)}
                            }></input>
    <input placeholder="Ingrese valor del producto"  className="form-control mb-2" name="nombre"  onChange={
                                (e)=>{modificarPrecio(e.target.value)}
                            } ></input>
    <input placeholder="Ingrese cantidad "  className="form-control mb-2" name="nombre"  onChange={
                                (e)=>{modificarStock(e.target.value)}
                            }
></input>
               <Button type="submit" variant="primary" >
                Añadir
                </Button>
      </Form>
  </div>
   
  </>  
 )
  
};
export default ListaProductos;
