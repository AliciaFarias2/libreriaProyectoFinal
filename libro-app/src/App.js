import logo from './logo.svg';
import Header from "./components/Header";
import Header from "./components/Navbar";
import Header from "./components/Libros";
import './App.css';
import {
  //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
   
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="libros" element={<Libros/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
