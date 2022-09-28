'use strict'
import http from 'http';

const dominio = 'localhost';
const puerto = 8000;

// Creacion del servidor
const manejadorServidor = function(req, res) {
  switch (req.url){
    case '/':
      res.writeHead(200, {'Content-type':'text/html'});
      res.write('<h1>Bienvenido a la página de inicio</h1>');
      res.end();
    case '/prueba':
      res.writeHead(200, { 'Content-type':'text/html' , 'EncabezadoLoco':'Soy Yo'});
      res.write('<p>Hola mundo desde NodeJS</p>');
      res.end();
  }
};

const servidor = http.createServer(manejadorServidor);

servidor.listen(puerto, function(){
  console.log(http);
  console.log(`Servidor corriendo en ${dominio}:${puerto}`);
});
