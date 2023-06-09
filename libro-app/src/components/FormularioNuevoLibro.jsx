import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function FormularioNuevoLibro(){
    const [categoria, setCategoria] = useState([]);
    const [autor, setAutor] = useState([]);
    const [editorial, setEditorial] =useState([]);
    const navigate = useNavigate();
    
    function enviarForm(evento){
        evento.preventDefault()
        //console.log(evento)
        let cuerpo = {
            nombre : evento.target.titulo.value,
            id_autor: evento.target.autor.value,
            id_categoria: evento.target.categoria.value,
            id_editorial: evento.target.editorial.value,
            fecha_lanzamiento: evento.target.fechaLanzamiento.value,
            idioma: evento.target.idioma.value,
            paginas: evento.target.paginas.value
        }
        console.log(cuerpo)

    fetch(`http://127.0.0.1:3000/api/crearLibro`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(cuerpo),
    })
    .then((respuesta)=>{
        respuesta.json().then((resultado)=>{
            console.log(resultado);
            navigate("/libros");
        });
    })
    .catch((error)=>{
        console.log(error);
    })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/cantidadLibrosPorCategoria").then((respuesta) => {
            respuesta.json().then((resultado) => {
                console.log(resultado)
                setCategoria(resultado)
            })
        })
        fetch("http://127.0.0.1:3000/api/autor").then((respuesta) => {
            respuesta.json().then((resultado) => {
                console.log(resultado)
                setAutor(resultado)
            })
        })
        fetch("http://127.0.0.1:3000/api/editorial").then((respuesta)=>{
            respuesta.json().then((resultado)=> {
                console.log(resultado)
                setEditorial(resultado)
            })
        })
       
    }, [])

    return <>
            <form className="formulario" onSubmit={enviarForm} method="post">
                
                Titulo: <input className="inputForm" id="titulo" name="titulo" type="text"/> 
                Fecha de lanzamiento: <input className="inputForm" id="fechaLanzamineto" name= "fechaLanzamiento" type="date"/>
                Idioma: <input className="inputForm" id="idioma" name="idioma" type="text"/>
                Páginas: <input className="inputForm" id="paginas" name="paginas" type="number"/>
 
                <select className="inputForm" id="categoria" name="categoria">
                    <option>
                        genero
                    </option>
                    {categoria.map((cat) => {
                        return (
                            <option value={cat.id} key={`categoria-lista-${cat.id}`}>
                                {cat.nombre}
                            </option>
                        );
                    })}
                    
                </select>

                <select className="inputForm" id="autor" name="autor">
                    <option>
                        autor
                    </option>
                    {autor.map((autor) => {
                        return (
                            <option value={autor.id} key={`autor-lista-${autor.id}`}>
                                {autor.nombre}
                            </option>
                        );
                    })}
                </select>

                <select className="inputForm" id="editorial" name="editorial">
                    <option>
                        editorial
                    </option>
                    {editorial.map((editorial) => {
                        return (
                            <option value={editorial.id} key={`editorial-lista-${editorial.id}`}>
                                {editorial.nombre}
                            </option>
                        );
                    })}
                </select>

                <button className="buttonForm"> Crear libro </button>
                
            </form>
        </>
}

export default FormularioNuevoLibro;