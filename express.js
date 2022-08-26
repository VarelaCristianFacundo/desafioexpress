const express = require("express");

const app = express();

//* Apuntar Rutas

app.get("/", (req, res) => {
  res.send({ hola: "mundo!" });
});

app.get("/hora", (re, res) => {
  res.send({ Hora: true });
});

const server = app.listen(8080, () => {
  console.log("Servidor de express iniciado");
});
