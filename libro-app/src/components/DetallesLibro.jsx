import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function DetallesLibro() {
    const [detallesLibro, setDetallesLibro] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/detallesLibro/"+id).then((respuesta) => {
            respuesta.json().then((resultado) => {
                console.log(resultado);
                setDetallesLibro(resultado);
            });
        });
    }, []);
    return (
        <>
            <div className="cartaContenedora">
                {detallesLibro!=null ? (<div>
                    <div className="tarjeta">
                            <span className="tituloTarjeta"> Nombre: {detallesLibro.nombre} </span> <span>.</span>
                            <span className="datosSecundarios"> Fecha de Lanzamiento: {detallesLibro.lanzamiento } </span> <span>.</span>
                            <span className="datosSecundarios"> Cantidad de paginas: {detallesLibro.paginas} </span> <span>.</span>
                            <span className="datosSecundarios"> Idioma: {detallesLibro.idioma} </span> <span>.</span>
                            <span className="datosSecundarios"> Genero: {detallesLibro.categoria} </span> <span>.</span>
                            <span className="datosSecundarios"> Editorial: {detallesLibro.editorial} </span> <span>.</span>
                            <span className="datosSecundarios"> Autor: {detallesLibro.Autor} </span> <span>.</span>
                            <span className="datosSecundarios"> Fecha de nacimiento del autor: {detallesLibro.fechaNacimientoAutor} </span> <span>.</span>
                            <span className="datosSecundarios"> Nacionalidad del autor: {detallesLibro.nacionalidadAutor} </span> <span>.</span>
                            
                        </div>
                </div>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}


export default DetallesLibro; 
