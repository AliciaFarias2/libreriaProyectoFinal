import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

function Libros() {
    const [libros, setLibros] = useState([])

    let {titulo} = useParams();
 
    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/filtroPorTitulo",{

        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre:titulo,
        }),
        })
        . then((respuesta) =>{
            respuesta.json()
            .then((resultado)=>{
                setLibros(resultado);
            });
        });
    }, [titulo]);

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
                        
                        </Link>)
                    })
                }</div>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}

export default Libros; 

