import React from 'react';
import toast from "react-hot-toast";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ProductoCard.module.css';
import { useProductos } from '../../context/productoContext';
import { useNavigate} from "react-router-dom";



export function ProductoCard  ({producto}){


const {deleteProducto}= useProductos();
const navigate = useNavigate();

 const handleDelete = (_id)=>{
   toast((t)=>(
    <div>
    <p>
      Seguro quiere eliminar? <strong>{_id}</strong>
    </p>
    <div>
            <Button variant='outline-danger mx-2' onClick={(e)=>{
              deleteProducto(_id)
              toast.dismiss(t._id);
             } }
            > Delete
            </Button>
            <Button variant='outline-secondary mx-2'
               onClick={() => toast.dismiss(t.id)}
            > Cancel</Button>
          </div>
    </div>
   ))

 };

  return (
    <div className={styles.ProductoCard}>
     <Card className={styles.ListaProductos} style={{ width: '19rem'} }>
       <div className={styles.img} style={{height:'13em'}}>{producto.image && <img src={producto.image.url} alt={producto.title}/>}
       </div>
      <Card.Body> 
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          <p>{producto._id}</p>
        <p>{producto.descripcion}</p>
        <h5>Precio: {producto.precio} us$</h5>
        <h5>Stock: {producto.stock}</h5>
        </Card.Text>
        <Button variant="primary" onClick={
                      ()=> navigate(`/productos/${producto._id}`)
                      }
        >Editar</Button>{"  "}
        <Button variant="danger "  onClick={(e)=>{
           e.stopPropagation();
          handleDelete(producto._id)
        }
        }
            
        >Eliminar</Button>

                         <div className={styles.botonmargin}>
                         <Button variant="success" onClick={
                      ()=>{
                        alert("Producto añadido")
                         }}>Agregar al Carrito</Button>
                         </div>
      </Card.Body>
    </Card>
    </div>
  ); 
};


