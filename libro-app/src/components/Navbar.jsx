import {Link, useNavigate} from "react-router-dom";

import logo from '../assets/logoDesterrados.png'


function Navbar(){
    const navigate = useNavigate();

    const enviar = (event) =>{
        event.preventDefault();
    navigate(`/buscador/${event.target.busqueda.value}`); 
    };

    return(
        <>
            <div className="navbar">

                <img className="logo" src={logo} alt="Logo" />

                <div className="opciones">
                       
                    <div className="botonera">

                        <Link to={`/libros`} className="button">
                            Libros
                        </Link>
                    
                        <Link to={`/Categoria`} className="button">
                            Libros por categoria
                        </Link>

                        <Link to={`/formCrearLibro`} className="button">
                            Crear nuevo libro
                        </Link>
                    </div>   

                    <div className="barraBusqueda">

                        <form onSubmit={enviar} method="POST">
                            <input className="inputBusqueda" id="busqueda" name="busqueda" type="text"> 

                            </input>
                            <button className="button"> 
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Navbar;