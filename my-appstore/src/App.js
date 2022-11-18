import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import ListaProductos from './components/ListaProductos/ListaProductos';
import ListaVentas from './components/ListaVentas/ListaVentas';
import CarCompras from './components/CarCompras/CarCompras';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ProductoProvider } from './context/productoContext';
import { UserProvider } from "./context/userContext";
import AddProducto from './components/AddProducto/AddProducto';
import { Toaster } from "react-hot-toast";
import Register from './components/register/register';
function App() {

 
  return (
   <> 
   <Header/>
   
   <ProductoProvider>
   <Routes>
   <Route path='/ListaVentas'  element={<ListaVentas/>}/>
   <Route path='/CarCompras'  element={<CarCompras/>}/>
  <Route path='/productos' element={<ListaProductos />}/>
  <Route path='/addProducto'  element={<AddProducto/>}/>
  <Route path='/productos/:id'  element={<AddProducto/>}/>
  </Routes>
   </ProductoProvider>
   
   <UserProvider>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/registro' element={<Register/>}/>
    </Routes>
   </UserProvider>
   <Toaster/>
   <Footer/>
   </>
  );
}

export default App;
