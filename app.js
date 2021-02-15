const express = require('express');
const app = express();
app.set('view engine','ejs')

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/contact',(req,res)=>{
  res.render('contact')

})
app.use((req,res)=>{
  res.render('404')

})

app.listen(3000, ()=>{
  console.log('Servidor escuchando')
})