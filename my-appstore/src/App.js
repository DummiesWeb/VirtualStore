import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import ListaProductos from './components/ListaProductos/ListaProductos';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/ListaProductos' element={<ListaProductos />}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
