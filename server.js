// modulos requeridos
const http = require('http')
const fs = require('fs')
const moment = require('moment')
// puerto y hostname
const port = 3000
const hostname = 'localhost'
const fecha = '2021-02-19'
console.log(moment(fecha).format('LL'))

// creación del servidor, pa cuando se conectan
const server = http.createServer((req, res)=> {
  let route = './src/views/'
  switch (req.url) {
    case '/':
      route += 'index.html';
      res.statusCode = 200;
      break;
      case '/contact':
      route += 'contact.html';
      res.statusCode = 200;
      break;
      case '/contact-us':
      res.statusCode = 301;
      res.setHeader('Location','/contact')
      break;

    default:
      route += '404.html';
      res.statusCode = 404;
    }
    console.log('servidor corriendo, aqui va toda la logica')
    // console.log('url: '+req.url)
    // console.log('method: '+req.method)
    res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>titulo</h1>')
    // res.write('<p>parrafo</p>')
    // res.end()
    fs.readFile(route, (err, data)=> {
      if (err) {
        console.log(err)
        res.end()
      } else {
        res.end(data)
      }
    })
  })

  // servidor arriba a la espera
  server.listen(port, hostname, ()=> {
    console.log(`servidor escuchando en el puerto ${port}`)
  })