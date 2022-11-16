import axios from 'axios';

 export const getProductosRequest= async ()=> await axios.get('/productos');
 export const deleteProductoRequest= async (id)=> await axios.delete('/productos/' + id);
 export const getProductoRequest= async (id)=> await axios.get('/productos/' + id);
 export const createProductoRequest= async (producto)=> await axios.post('/productos', producto);
 export const updateProductoRequest= async (id, newProductoFields)=> await axios.put(`/productos/${id}`, newProductoFields);