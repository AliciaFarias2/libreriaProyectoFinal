import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import Categoria from "./components/Categoria";
import DetallesLibro from "./components/DetallesLibro";
import FormularioNuevoLibro from "./components/FormularioNuevoLibro";
import BusquedaPorTitulo from "./components/BusquedaPorTitulo";
import './App.css';
import {
  //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
   
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="libros" element={<Libros/>} />
          <Route path="categoria" element={<Categoria/>} />
          <Route path="detallesLibro/:id" element={<DetallesLibro/>} />
          <Route path="formCrearLibro" element={<FormularioNuevoLibro/>} />
          <Route path="buscador/:titulo" element={<BusquedaPorTitulo/>} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
