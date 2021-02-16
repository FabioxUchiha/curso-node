const express = require('express')
const app = express();
const mongoose = require('mongoose')
const mongodb = 'mongodb+srv://FabioxUchiha:Fbx12345*@cluster0.jw09m.mongodb.net/items-data?retryWrites=true&w=majority';
const Item = require('./models/item')

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
  res.redirect('get-item')
})

app.get('/contact', (req, res)=> {
  res.render('contact');
})

app.get('/add-item', (req, res)=> {
  res.render('add-item');
})

app.get('/create-item', (req, res)=> {
  const item = new Item({
    name: 'tostadora',
    price: 120000
  })
  item.save()
  .then(result => res.send(result))
  .catch(err => res.send(err))
})

app.get('/get-items', (req, res)=> {
  Item.find()
  .then(result=>res.send(result))
  .catch(err => res.send(err))
})
app.get('/get-item', (req, res)=> {
  Item.findById('602c2f1f9d44d746c986d235')
  .then(result=>res.render('index', {
    name: result.name,
    price: result.price,
  }))
  })

  app.use((req, res)=> {
    res.render('404');
  })