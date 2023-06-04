
const db = require("../models");

module.exports = {
    libros: (req, res) => {

        const buscarLibros = db.Libro.findAll({
            include: [
                {
                    model: db.Categoria
                },
                {
                    model: db.Editorial
                },
                {
                    model: db.Autor
                }
            ]
        });
        Promise.all([buscarLibros]).then(([buscarLibros2]) => {
            const resultado = buscarLibros2.map((libro)=>{
                return {
                    id: libro.id,
                    nombre: libro.nombre, 
                    autor: libro.Autor.nombres, 
                    categoria: libro.Categorium.nombre, 
                    editorial: libro.Editorial.nombre, 
                    fechaDeLanzamiento: libro.fecha_lanzamiento
                }
            })
            res.json(resultado);

        })

    },
    cantidadLibros: (req, res) => {
        const cantidadLibrosPorCategoria = db.Categoria.findAll({
            include: [
                {
                    model: db.Libro
                }
            ]
        }); 
        Promise.all([cantidadLibrosPorCategoria]).then(([categorias
        ])=>{
            const resultado = categorias.map((categoria)=>{
                return {
                    id: categoria.id,
                    nombre: categoria.nombre,
                    cantidad: categoria.Libros.length
                }
            })
            res.json(resultado);
        })

    },
    verLibroConDetallesDeAutor: (req, res)=> {
        const detallesDeLibro = db.Libro.findOne({
            include:[
                {
                    model: db.Autor
                },
                {
                    model: db.Categoria
                },
                {
                    model: db.Editorial
                }
            ],
            where: {id:req.params.id}
        });
        Promise.all([detallesDeLibro]).then(([Libro
        ])=>{
            
            let resultado = {
                nombre: Libro.nombre,
                lanzamiento: Libro.fecha_lanzamiento,
                paginas: Libro.paginas,
                idioma: Libro.idioma,
                categoria: Libro.Categorium.nombre,
                editorial: Libro.Editorial.nombre,
                Autor: Libro.Autor.nombres + " " + Libro.Autor.apellido,
                fechaNacimientoAutor: Libro.Autor.fecha_de_nacimiento,
                nacionalidadAutor: Libro.Autor.nacionalidad
            }
            res.json(resultado);
        })



    },
    
    crearLibro: (req,res)=>{

        return db.Libro.create({
           nombre: req.body.nombre,
           id_autor: parseInt(req.body.id_autor),
           id_categoria: parseInt(req.body.id_categoria),
           id_editorial:parseInt(req.body.id_editorial),
           fecha_lanzamiento: req.body.fecha_lanzamiento,      
           idioma: req.body.idioma,
           paginas: parseInt(req.body.paginas),
            
        })
            .then((libroNuevo) => {
                console.log(req.body);
                res.json(libroNuevo);
           })
            .catch((error) => {
               console.log(error);
           })

    },

    /*  filtroPorTitulo : (req,res) => {
        const {nombre} = req.query;
            db.Libro.findAll({
                where: { nombre: nombre},
            include: [db.Autor, db.Categoria],
            })
            .then((libros)=>{
                const resultado = libros.map((libro)=>{
                    return {
                        id: libro.id,
                        nombre: libro.nombre,
                        autor: libro.Autor.nombres + " " + libro.Autor.apellido,
                        categoria: libro.Categorium.nombre,
                    };
                });
                res.json(resultado);
            })
            .catch((error)=> {
            console.log(error);
            })
    }, */

  /*filtroPorTitulo: (nombre) => {             
    return db.Libro.findAll({
        where: { nombre: nombre }
    })
        .then((libros) => {
            return libros[0];
        })
        .catch((error) => {
            console.log(error);
        })
    },*/
}