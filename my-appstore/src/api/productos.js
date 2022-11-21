import axios from 'axios';

 export const getProductosRequest= async ()=> await axios.get('/productos');
 export const deleteProductoRequest= async (id)=> await axios.delete('/productos/' + id);
 export const getProductoRequest= async (id)=> await axios.get('/productos/' + id);

 export const updateProductoRequest= async (id, newProductoFields)=>{

  const form = new FormData();

  for (let key in newProductoFields) {
    form.append(key, newProductoFields[key]);
  }

return await axios.put(`/productos/${id}`, form, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
 } ;

 export const createProductoRequest= async (producto)=>{
    const form = new FormData();
    for (let key in producto) {
        form.append(key, producto[key]);
      }
    
   return await axios.post('/productos', form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });  
 };