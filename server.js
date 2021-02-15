// modulos requeridos
const http = require('http')
const fs = require('fs')
// puerto y hostname
const port = 3000
const hostname = 'localhost'

// creación del servidor, pa cuando se conectan
const server = http.createServer((req, res)=> {
  console.log('servidor corriendo, aqui va toda la logica')
  // console.log('url: '+req.url)
  // console.log('method: '+req.method)
  res.setHeader('Content-Type','text/html')
  // res.write('<h1>titulo</h1>')
  // res.write('<p>parrafo</p>')
  // res.end()
  fs.readFile('./src/vews/index.html',(err,data)=>{
    if (err) {
      console.log(err)
      res.end()
    }else {
      res.end(data)
    }
  })
})

// servidor arriba a la espera
server.listen(port,hostname,()=>{
  console.log(`servidor escuchando en el puerto ${port}`)
})