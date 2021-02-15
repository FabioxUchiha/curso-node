/*
console.log(__filename)

setTimeout(()=> {
  console.log(__dirname)
}, 2000);

*/

/*
const {student, nums} = require('./students')

console.log(student)
*/

const fs = require('fs');

// // leer archivo
// fs.readFile('../public/texto.txt', (err,data)=>{
//   if (err){
//     console.log(err)
//   }else {
//     console.log(data.toString())
//   }
// })


// // escribir archivo
// fs.writeFile('../public/texto.txt', 'nueva informacion ', (err,data)=>{
//   if (err){
//     console.log(err)
//   }else {
//     console.log('archivo escrito con exito')
//   }
// })


// // agregar texto al archivo
// fs.appendFile('../public/texto.txt','\neste es el texto agregado', (err,data)=>{
//   if (err){
//     console.log(err)
//   }else {
//     console.log('editado correctamente ')
//   }
// })

// // crear carpeta
// fs.mkdir('newFolder',(err,data)=>{
//   if (err) {
//   console.log(err)
//   }else{
//   console.log('carpeta creada')

//   }
// })

// // borrar carpeta
// fs.rmdir('newFolder',(err,data)=>{
//   if (err) {
//   console.log(err)
//   }else{
//   console.log('carpeta creada')

//   }
// })

// eliminar file
// if (fs.existsSync('../public/texto.txt')) {
//   fs.unlink('../public/texto.txt', (err, data)=> {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('archivo borrado')

//     }
//   })
// }else {
//   console.log('el archivo no existe')
// }