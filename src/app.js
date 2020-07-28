// Depenencias.
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

// Variables de entorno.
require("dotenv").config();

// Rutas.

// APP.
const app = express();

// Server.
const port = (process.env.PORT || 3001);
const ip = (process.env.IP || "192.168.0.1");

app.listen(port, () => {
    console.log("[INFO] APP running...");
    console.log(`[INFO] http://localhost:${port}`);
    console.log(`[INFO] http://${ip}:${port}`);
});