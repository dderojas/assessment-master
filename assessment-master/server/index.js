const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {

console.log('did I make it?????')
  res.send('hi');
})

app.listen(3000)