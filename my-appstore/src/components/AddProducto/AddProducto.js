import React, { useState } from 'react';
import styles from './AddProducto.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

const AddProducto = () => {
  

 const [newProducto, setNewProducto]= useState({id:"",nombre:"",descripcion:"",precio:"",stock:""})
 
 const modificarId=(idNuevo)=>{
  setNewProducto({id:idNuevo,nombre:newProducto.nombre,descripcion:newProducto.descripcion,
                  precio:newProducto.precio,stock:newProducto.stock})

  }
  const modificarNombre=(nombreNuevo)=>{
    setNewProducto({nombre:nombreNuevo,descripcion:newProducto.descripcion,
                    precio:newProducto.precio,stock:newProducto.stock,id:newProducto.id})

    }

  const modificarDescripcion=(descripcionNuevo)=>{
    setNewProducto({descripcion:descripcionNuevo,nombre:newProducto.nombre,precio:newProducto.precio,stock:newProducto.stock,id:newProducto.id})
  }

  const modificarPrecio=(precioNuevo)=>{
    setNewProducto({precio:precioNuevo,nombre:newProducto.nombre,descripcion:newProducto.descripcion,stock:newProducto.stock,id:newProducto.id})
  }
  const modificarStock=(stockNuevo)=>{
    setNewProducto({stock:stockNuevo,nombre:newProducto.nombre,descripcion:newProducto.descripcion,precio:newProducto.precio,id:newProducto.id})
  }

  const addProducto=(e)=>{
    const datosProductos= JSON.parse(localStorage.getItem("productos"))
    datosProductos.push(newProducto)
    localStorage.setItem("productos",JSON.stringify(datosProductos))
        e.target.form.elements.idnewinput.value=""
        e.target.form.elements.nombrenewinput.value=""
        e.target.form.elements.descripcionnewinput.value=""
        e.target.form.elements.precionewinput.value=""
        e.target.form.elements.stocknewinput.value=""
  }
 
  return(
  <div className={styles.AddProducto}>
     <Form onSubmit={
          (e)=>{
            addProducto(e)
          }
        }>
         <h3>Agregar nuevo producto</h3> 
         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                            <Form.Control
                            id="idnewinput"
                            placeholder="Id producto"
                            aria-label="Id"
                            aria-describedby="basic-addon1"
                            onChange={
                              (e)=>{modificarId(e.target.value)}
                          }
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                            <Form.Control
                            id="nombrenewinput"
                            placeholder="Nombre producto"
                            aria-label="Nombre"
                            aria-describedby="basic-addon1"
                            onChange={
                              (e)=>{modificarNombre(e.target.value)}
                          }
                            />
                        </InputGroup>
                    
                    
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">Descripcion</InputGroup.Text>
                            <Form.Control
                            id="descripcionnewinput"
                            placeholder="añadir descripcion"
                            aria-label="Descripcion"
                            aria-describedby="basic-addon2"
                            onChange={
                              (e)=>{modificarDescripcion(e.target.value)}
                          }
                        
                            />
                        </InputGroup>
                    
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">Precio</InputGroup.Text>
                            <Form.Control
                            id="precionewinput"
                            placeholder="Precio"
                            aria-label="Precio"
                            aria-describedby="basic-addon3"
                            onChange={
                              (e)=>{modificarPrecio(e.target.value)}
                          }
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">Stock</InputGroup.Text>
                            <Form.Control
                            id="stockdnewinput"
                            placeholder="stock"
                            aria-label="Stock"
                            aria-describedby="basic-addon3"
                            onChange={
                              (e)=>{modificarStock(e.target.value)}
                          }
                            />
                        </InputGroup>
                        <Button variant="primary mb-3  " size="lg"
                        type="submit"
                        
                        >Agregar</Button>
               


        </Form>

  </div>
  );
}

export default AddProducto;

