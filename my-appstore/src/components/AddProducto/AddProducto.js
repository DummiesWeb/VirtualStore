import React, { useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import { useProductos } from '../../context/productoContext';
import { useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import styles from './AddProducto.module.css';
import Button from 'react-bootstrap/Button';



const AddProducto = () => {
  
 const {createProducto, getProducto, updateProducto}= useProductos();
 const navegate= useNavigate();
 
 
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio:"",
    stock:"",
    image: null,
  });
  const params = useParams();
 useEffect(()=>{
  (async()=>{
    if(params.id){
    const producto= await getProducto(params.id)
    setProducto({
      nombre: producto.nombre,
    descripcion:producto.descripcion,
    precio:producto.precio,
    stock:producto.stock,
    })
      }
  })();

 }, [params.id, getProducto])
  return(
  <div className={styles.AddProducto}>
     <h3> producto</h3> 
     <Formik 
     initialValues={producto}
     enableReinitialize
     validationSchema={Yup.object({
     nombre: Yup.string().required("nombre es Requerido"),
     descripcion: Yup.string().required("descripción es Requerida"),
     precio: Yup.number().required("precio es requerido"),
     stock: Yup.number().required("cantidad es requerida"),

     })}
     onSubmit={ async (values, actions)=>{

        if(params.id){
          await updateProducto(params.id, values);
        }else{
          await createProducto(values);
        
        }
        navegate('/productos/');
        
     }}
      >
        {({handleSubmit})=>(
         <Form onSubmit={handleSubmit}>
         <div>
         <Field name='nombre' placeholder="Nombre" className={styles.field}/>
         <ErrorMessage name='nombre'/>
         </div>
         <div>
         <Field component="textarea" name='descripcion' placeholder="Descripción" className={styles.field}/>
         <ErrorMessage name='descripcion'/>
         </div>
        <div>
        <Field name='precio' placeholder="valor" className={styles.field}/>
        <ErrorMessage name='precio'/>
        </div>
        <div>
        <Field name='stock' placeholder="cantidad" className={styles.field}/>
        <ErrorMessage name='stock'/>
        </div>
       <div>
       <Button className={styles.boton} variant="primary large" 
                   type="submit" 
                   >Save</Button>
       </div>
        
        </Form>

        )}
        </Formik>

  </div>
  );
   }

export default AddProducto;

