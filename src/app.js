// fs es file system
const fs = require('fs');

// leer ficheros
const readStream = fs.createReadStream(
  '../public/largue.txt', {
    encoding: 'utf-8'

  });
  
  // crear ficheros
  const writeStream = fs.createWriteStream('../public/writeStream.txt')

readStream.on('data', (data) => {
  console.log('inicia readStream')
  console.log(data)
});

readStream.pipe(writeStream)