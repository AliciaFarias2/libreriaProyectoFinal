import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


function Libros() {
    const [libros, setLibros] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/todosLosLibros").then((respuesta) => {
            respuesta.json().then((resultado) => {
                console.log(resultado)
                setLibros(resultado)
            })
        })
    }, [])
    return (
        <>
            <div className="cartaContenedora">
                {libros.length > 0 ? (<>{
                    libros.map((libro, index) => {
                        return (<Link className="tarjeta" to={"/detallesLibro/"+ libro.id}>
                            <span className="tituloTarjeta">
                                Titulo: {libro.nombre} 
                            </span> 
                            <span className="datosSecundarios">
                                Genero: {libro.categoria}
                            </span>
                            <span className="datosSecundarios"> 
                                Autor: {libro.autor} 
                            </span> 
                            <span className="datosSecundarios"> 
                                Editorial: {libro.editorial} 
                            </span>
                            <span className="datosSecundarios">
                                Fecha de lanzamiento: {libro.fechaDeLanzamiento} 
                            </span>

                        </Link>)
                    })
                }</>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}

export default Libros; 