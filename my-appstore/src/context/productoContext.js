import  {useState, useContext, createContext, useEffect}  from "react";
import { getProductosRequest, createProductoRequest, deleteProductoRequest, getProductoRequest, updateProductoRequest } from "../api/productos";

const productoContext = createContext();

export const useProductos = () => {
    const context = useContext(productoContext);
    if (!context) throw new Error("Post Provider is missing");
    return context;
  };
export const ProductoProvider=({children})=>{

    const [productos, setProductos]=useState([]);
    useEffect(() => {
        (async () => {
          const res = await getProductosRequest();
          setProductos(res.data);
        })();
      }, []);

      

      const createProducto= async (producto)=>{
       try {
        const res= await createProductoRequest(producto)
       setProductos([...productos, res.data])
       } catch (error) {
        console.error(error);
       }
      };

      const deleteProducto= async (id)=>{
        const res= await deleteProductoRequest(id)

        if (res.status === 204) {
        setProductos(productos.filter((producto) => producto._id !== id));
        }
      };
    const getProducto = async (id)=>{
       try {
        const res = await getProductoRequest(id);
        return res.data;
       } catch (error) {
        console.error(error);
       }
    };
     
    const updateProducto = async (id, producto)=>{
      try {
        const res= await updateProductoRequest(id, producto);
      setProductos(productos.map((producto) => (producto._id===id ? res.data : producto)));
      } catch (error) {
        console.error(error);
      }
    };


    return (
        <productoContext.Provider value={{productos, createProducto, deleteProducto, getProducto, updateProducto}}>
          {children}
        </productoContext.Provider>
      );
}; 