import logo from './logo.svg';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import Categoria from "./components/Categoria";
import DetallesLibro from "./components/DetallesLibro";
import FormularioNuevoLibro from "./components/FormularioNuevoLibro";
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
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="libros" element={<Libros/>} />
          <Route path="categoria" element={<Categoria/>} />
          <Route path="detallesLibro/:id" element={<DetallesLibro/>} />
          <Route path="formCrearLibro" element={<FormularioNuevoLibro/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
