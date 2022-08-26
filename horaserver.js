const http = require("http");

const servidor = http.createServer((req, res) => {
  const date = new Date();
  const hora = date.getHours();

  if (hora >= 6 && hora <= 12) {
    res.end("Buenos Dias");
  } else if (hora > 13 && hora <= 19) {
    res.end("Buenas Tardes");
  } else {
    res.end("Buenas Noches");
  }
});

const servidorCon = servidor.listen(8080, () => {
  console.log("Servidor Activo");
});
