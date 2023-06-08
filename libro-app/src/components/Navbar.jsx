import {Link, useNavigate} from "react-router-dom";


function Navbar(){
    const navigate = useNavigate();

    const enviar = (event) =>{
        event.preventDefault();
    navigate(`/buscador/${event.target.busqueda.value}`); 
    };

    return(
        <>
            <div>
                <Link to={`/libros`} className="button">
                    Libros
                </Link>
                <Link to={`/formCrearLibro`} className="button">
                    Crear nuevo libro
                </Link>
                <form onSubmit={enviar} method="POST">
                    <input id="busqueda" name="busqueda" type="text"> 

                    </input>
                    <button className="button"> 
                        Buscar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Navbar;