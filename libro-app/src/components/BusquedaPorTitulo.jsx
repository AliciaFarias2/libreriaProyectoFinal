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
            <div className="cartaContenedora">
                {libros.length > 0 ? (<div>{
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
                        </Link>)
                    })
                }</div>) : (<span className="mensaje">Lo siento, no encuentro el título que estás buscando.</span>)}

            </div>
            
        </>
    )
}

export default Libros; 

