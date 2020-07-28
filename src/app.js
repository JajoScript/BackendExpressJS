// Depenencias.
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

// Importación de rutas.
const indexRouter = require("./routes/index");

// Variables de entorno.
require("dotenv").config();

// APP.
const app = express();

// Middlewares.
app.use(cookieParser());
app.use(express.json());

// Cargando los templates.
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Controlador de rutas.
app.use('/', indexRouter);

// Server.
const port = (process.env.PORT || 3001);
const ip = (process.env.IP || "192.168.0.1");

app.listen(port, () => {
    console.log("[INFO] APP running...");
    console.log(`[INFO] http://localhost:${port}`);
    console.log(`[INFO] http://${ip}:${port}`);
});