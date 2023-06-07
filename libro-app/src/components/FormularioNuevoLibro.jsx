import { useEffect, useState } from "react";


function FormularioNuevoLibro(){
    const [categoria, setCategoria] = useState([])
    const [autor, setAutor] = useState([])
    function enviarForm(evento){
        evento.preventDefault()
        //console.log(evento)
        let cuerpo = {
            nombre : evento.target.titulo.value
        }
        console.log(cuerpo)
    /*
    nombre: req.body.nombre,
           id_autor: parseInt(req.body.id_autor),
           id_categoria: parseInt(req.body.id_categoria),
           id_editorial:parseInt(req.body.id_editorial),
           fecha_lanzamiento: req.body.fecha_lanzamiento,      
           idioma: req.body.idioma,
           paginas: parseInt(req.body.paginas)
           */
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
    }, [])

    return <>
            <form onSubmit={enviarForm} method="post">
                
                Titulo: <input id="titulo" name="titulo" type="text"/> 
                Fecha de Lanzamiento: <input type="date"/>
                Idioma: <input type="text"/>
                Páginas: <input type="number"/>

                <select>
                    <option>elegir</option>
                    {categoria.map((cat)=>{return <option value={cat.id}>{cat.nombre}</option>})}
                </select>

                <select>
                    <option>elegir</option>
                    {autor.map((autor)=>{return <option value={autor.id}>{autor.nombre}</option>})}
                </select>
                
                <button> Enviar </button>
                
            </form>
        </>
}

export default FormularioNuevoLibro;