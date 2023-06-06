import { useEffect, useState } from "react";

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