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
            <div>
                {detallesLibro!=null ? (<div>
                    <div className="card">
                            <span> Nombre: {detallesLibro.nombre} </span> <span>.</span>
                            <span> Fecha de Lanzamiento: {detallesLibro.lanzamiento } </span> <span>.</span>
                            <span> Cantidad de paginas: {detallesLibro.paginas} </span> <span>.</span>
                            <span> Idioma: {detallesLibro.idioma} </span> <span>.</span>
                            <span> Genero: {detallesLibro.categoria} </span> <span>.</span>
                            <span> Editorial: {detallesLibro.editorial} </span> <span>.</span>
                            <span> Autor: {detallesLibro.Autor} </span> <span>.</span>
                            <span> Fecha de nacimiento del autor: {detallesLibro.fechaNacimientoAutor} </span> <span>.</span>
                            <span> Nacionalidad del autor: {detallesLibro.nacionalidadAutor} </span> <span>.</span>
                            
                        </div>
                </div>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}


export default DetallesLibro; 
