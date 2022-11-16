import styles from './ListaProductos.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useProductos } from '../../context/productoContext';
import { ProductoCard } from '../ProductoCard/ProductoCard';
import { Link} from "react-router-dom";

  const ListaProductos = () => {
   
  //state
  const { productos } = useProductos();

 const renderProducto = () =>{
  
  if (productos.length===0)
 return (
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-white text-2xl">No hay productos agregados</h1>
  </div>
);

 return(
  
  <div className={styles.wrapper}>
  { productos.map((producto)=>(
      <ProductoCard key={producto._id} producto={producto}/>))}
  </div>
  
  
 );
 };
 return (
  <main>
   <h1 className={styles.ListaProductos}>Lista de productos</h1>
   <h1 className="text-2xl text-gray-300 font-bold">
          Productos({productos.length})
        </h1>
    {renderProducto()}

    <div className={styles.link} >
  <Link to="/addProducto"   className=" btn btn-primary" >
    Agregar nuevo producto
  </Link>
  </div>
  </main>
 )
 
};
export default ListaProductos;
