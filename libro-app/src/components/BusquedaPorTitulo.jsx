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
                        return (<div className="card" key={"lista-libro-"+index}>
                            <span> titulo: {libro.nombre} </span> <span> descripcion</span>
                            <span> datos </span> <span> etc </span>
                        </div>)
                    })
                }</div>) : (<span>no hay</span>)}

            </div>
            
        </>
    )
}

export default Libros; 

