const express = require('express')
const app = express();
const mongoose = require('mongoose')
const mongodb = 'mongodb+srv://FabioxUchiha:Fbx12345*@cluster0.jw09m.mongodb.net/items-data?retryWrites=true&w=majority';

app.set('view engine', 'ejs')

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> {
  console.log('conectado')
  app.listen(3000, ()=> {
    console.log('Servidor escuchando')
  })
})
.catch((err)=>console.log(err))


app.get('/', (req, res)=> {
  res.render('index',
    {
      title2: 'titulo index'
    });
})

app.get('/contact', (req, res)=> {
  res.render('contact');
})

app.use((req, res)=> {
  res.render('404');
})