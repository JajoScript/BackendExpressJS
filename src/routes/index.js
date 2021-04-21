// Dependencias.
const express = require("express");
const router = express.Router();

// Peticiones.
router.get('/', (request, response, next) => {
    console.log(request);

    response.render("index", { title: request.query.user });
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
    username = request.query.user
    response.send(`Se elimino el usuario: ${username}`);
});

router.options('/', (request, response, next) => {
    response.send("[OPTIONS] request");
});

// Exportación.
module.exports = router;