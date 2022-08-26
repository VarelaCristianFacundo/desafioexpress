const http = require('http')


                //req request   res response
const server = http.createServer((peticion, respuesta)=> {
    respuesta.end ("Hola coder!!")
})

const conn = server.listen(8082, () => {
    console.log(`Servidor activo en el puerto : ${conn.address().port}`);
})