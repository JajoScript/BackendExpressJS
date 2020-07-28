// Dependencias.
const express = require("express");
const router = express.Router();

// Peticiones.
router.get('/', (request, response, next) => {
    response.render("index", { title: "Main" });
});

router.post('/', (request, response, next) => {
    response.send("[POST] request");
});

router.put('/', (request, response, next) => {
    response.send("[PUT] request");
});

router.patch('/', (request, response, next) => {
    response.send("[PATCH] request");
});

router.delete('/', (request, response, next) => {
    response.send("[DELETE] request");
});

router.options('/', (request, response, next) => {
    response.send("[OPTIONS] request");
});

// Exportación.
module.exports = router;