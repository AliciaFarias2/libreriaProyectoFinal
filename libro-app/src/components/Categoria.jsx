import { useEffect, useState } from "react";

function Categoria() {
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/cantidadLibrosPorCategoria").then((respuesta) => {
            respuesta.json().then((resultado) => {
                console.log(resultado);
                setCategoria(resultado);
            });
        });
    }, []);
    return (
        <>
            <div>
                {categoria.length > 0 ? (<div>{
                    categoria.map((categoria, index) => {
                        return (<div className="card" key={"lista-libro-"+index}>
                            <span> Genero: {categoria.nombre} </span> <span>.</span>
                            <span>Cantidad de libros en esta categoria: {categoria.cantidad}</span>
                        </div>)
                    })
                }</div>) : (<span>no hay libros</span>)}

            </div>
            
        </>
    )
}

export default Categoria; 