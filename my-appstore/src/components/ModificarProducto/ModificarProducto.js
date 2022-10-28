import styles from './ModificarProducto.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

const ModificarProducto = () => {

  const productoModificarJson = JSON.parse(localStorage.getItem("productoModificar"))
  let productoModificado=false
  const [newProducto, setNewProducto]= useState(productoModificarJson)

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

  
  const editarProducto=(e)=>{
    const datosProductos= JSON.parse(localStorage.getItem("productos"))
    for(let i=0; i<datosProductos.length; i++){
      if(datosProductos[i].id===newProducto.id){
        datosProductos[i].nombre=newProducto.nombre
        datosProductos[i].descripcion=newProducto.descripcion
        datosProductos[i].precio=newProducto.precio
        datosProductos[i].stock=newProducto.stock
      }
  }
    localStorage.setItem("productos",JSON.stringify(datosProductos))
    localStorage.setItem("productoModificar",JSON.stringify(newProducto))
    productoModificado=true

    alert("Producto Modificado 👌")
    e.target.form.elements.idnewinput.value=""
    e.target.form.elements.nombrenewinput.value=""
    e.target.form.elements.descripcionnewinput.value=""
    e.target.form.elements.precionewinput.value=""
    e.target.form.elements.stocknewinput.value=""

  }
  

return(
  <div className={styles.ModificarProducto}>
    {
    productoModificado?<p>Producto Modificado Con Exito</p>:
    
    <Form onSubmit={
      (e)=>{
        editarProducto(e)
      }
    }>
     <h5>Modificar Producto</h5>
     
            <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">id</InputGroup.Text>
                        <Form.Control
                        id="idnewinput"
                        placeholder="id producto"
                        aria-label="Id"
                        aria-describedby="basic-addon1"
                        defaultValue={newProducto.id}
                        disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">Nombre</InputGroup.Text>
                        <Form.Control
                        id="nombrenewinput"
                        placeholder="nombre del producto"
                        aria-label="Nombre"
                        aria-describedby="basic-addon2"
                        defaultValue={newProducto.nombre}
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
                        defaultValue={newProducto.descripcion}
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
                        defaultValue={newProducto.precio}
                        onChange={
                          (e)=>{modificarPrecio(e.target.value)}
                      }
                        />
                    </InputGroup><InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Stock</InputGroup.Text>
                        <Form.Control
                        id="stockdnewinput"
                        placeholder="stock"
                        aria-label="Stock"
                        aria-describedby="basic-addon3"
                        defaultValue={newProducto.stock}
                        onChange={
                          (e)=>{modificarStock(e.target.value)}
                      }
                        />
                    </InputGroup><Button variant="primary" 
                    type="submit" onClick={
                      ()=>{
                          window.location.href="/ListaProductos"
                      }} 
                    >Agregar</Button>
    </Form>

    }
  </div>
);
}
export default ModificarProducto;