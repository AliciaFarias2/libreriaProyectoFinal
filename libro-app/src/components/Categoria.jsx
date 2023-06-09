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
            <div className="cartaContenedora">
                {categoria.length > 0 ? (<>{
                    categoria.map((categoria, index) => {
                        return (<div className="tarjeta" key={"lista-libro-"+index}>
                            <span className="tituloTarjeta"> Genero: {categoria.nombre} </span> <span>.</span>
                            <span className="datosSecundarios">Cantidad de libros en esta categoria: {categoria.cantidad}</span>
                        </div>)
                    })
                }</>) : (<span>no hay libros</span>)}

            </div>
            
        </>
    )
}

export default Categoria; 