const express = require("express");
let router = express.Router();

const controller = require("../controllers/controllers");

router.get("/todosLosLibros", controller.libros);
router.get("/cantidadLibrosPorCategoria", controller.cantidadLibros);
router.get("/detallesLibro/:id", controller.verLibroConDetallesDeAutor);
router.post("/crearLibro", controller.crearLibro);
router.post("/filtroPorTitulo", controller.filtroPorTitulo);
router.get("/autor", controller.autores);

module.exports = router;
