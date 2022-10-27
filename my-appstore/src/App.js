import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import ListaProductos from './components/ListaProductos/ListaProductos';
import datosProductosJson from './components/ListaProductos/Datosproductos';
import ModificarProducto from './components/ModificarProducto/ModificarProducto';
function App() {

  if(localStorage.getItem("productos")==null){
    localStorage.setItem("productos",JSON.stringify(datosProductosJson))
 }
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/ListaProductos' element={<ListaProductos />}/>
   <Route path='/Modificar'  element={<ModificarProducto/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
