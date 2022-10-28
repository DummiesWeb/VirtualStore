import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import ListaProductos from './components/ListaProductos/ListaProductos';
import datosProductosJson from './components/ListaProductos/Datosproductos';
import ModificarProducto from './components/ModificarProducto/ModificarProducto';
import ListaVentas from './components/ListaVentas/ListaVentas';
import CarCompras from './components/CarCompras/CarCompras';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {

  if(localStorage.getItem("productos")==null){
    localStorage.setItem("productos",JSON.stringify(datosProductosJson))
 }
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/Home' element={<Home/>}/>
   <Route path='/ListaProductos' element={<ListaProductos />}/>
   <Route path='/Modificar'  element={<ModificarProducto/>}/>
   <Route path='/ListaVentas'  element={<ListaVentas/>}/>
   <Route path='/CarCompras'  element={<CarCompras/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>

   </>
  );
}

export default App;
