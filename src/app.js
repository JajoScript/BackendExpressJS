// Depenencias.
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");

// Importación de rutas.
const indexRouter = require("./routes/index");

// Variables de entorno.
require("dotenv").config();

// APP.
const app = express();

// Middlewares.
app.use(logger("tiny"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Cargando los templates.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Controlador de rutas.
app.use('/', indexRouter);

// Control de errores.
app.use((request, response, next) => {
    next(createError(404));
});

app.use( (error, request, response, next) => {
    response.locals.message = error.message;
    response.locals.error = error;

    response.status(error.status || 500);
    response.render("error");
});

// Server.
const port = (process.env.PORT || 3001);
const ip = (process.env.IP || "192.168.0.1");

app.listen(port, () => {
    console.log("[INFO] APP running...");
    console.log(`[INFO] http://localhost:${port}`);
    console.log(`[INFO] http://${ip}:${port}`);
});

module.exports = app;