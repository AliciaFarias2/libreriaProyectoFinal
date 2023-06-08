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
            <div>
                {libros.length > 0 ? (<div>{
                    libros.map((libro, index) => {
                        return (<Link className="card" to={"/detallesLibro/"+ libro.id}>
                            <span>
                                Titulo: {libro.nombre} 
                            </span> 
                            <span>
                                Genero: {libro.categoria}
                            </span>
                            <span> 
                                Autor: {libro.autor} 
                            </span> 
                            <span> 
                                Editorial: {libro.editorial} 
                            </span>
                            <span>
                                Fecha de lanzamiento: {libro.fechaDeLanzamiento} 
                            </span>

                        </Link>)
                    })
                }</div>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}

export default Libros; 