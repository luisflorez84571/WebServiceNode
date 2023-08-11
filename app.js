// importar los paquetes como el express para crear
// un web server en un entorno local

const express = require('express');
// el webserver se e asigna al archivo app.js
const app = express();
//const port = 3000;

// importar el paquete de dotenv
require('dotenv').config();
const port = process.env.PORT;
// mostrar contenido de la carpeta public

app.use(express.static('public'));

/*consultar las paginas en el web server se utiliza
  el get, una funcion de flecha.*/
/*app.get('/', (req, res) => {
    // utilizar el res, para responder a la peticion.
    res.sendFile(__dirname + '/public/index.html');

});*/

app.get('/left-sidebar', (req, res) => {
    // utiliza el res para responder a la peticion.
    res.sendFile(__dirname + '/public/left-sidebar.html');
});

app.get('/right-sidebar', (req, res) => {
    //
    res.sendFile(__dirname + '/public/right-sidebar.html');
});

app.get('/no-sidebar', (req, res) => {
    // utiliza el res para responder a la peticion.
    res.sendFile(__dirname + '/public/no-sidebar.html');
});

app.get('*', (req, res) => {
    //el * es para validar la busqueda de una pagina.
    res.sendFile(__dirname + '/public/404.html');
});
// se necesita activar el puerto para el webserver.
app.listen(port, () => {
    console.log('El servidor esta corriendo en el puerto:'+ port);
});