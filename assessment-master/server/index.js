require('dotenv').config()
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.post('/signin', (req, res) => {
  console.log('did I make it?????')
  console.log(req.body, 'body?????')
  res.send('hi');
})

app.listen(3000)