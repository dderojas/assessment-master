require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

AWS.config.region = process.env.AWS_REGION;

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();

const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post('/signin', (req, res) => {
  console.log('in signin!!!!', req.body)
  res.send('hi');
})

app.post('/stayUpdated', async (req, res) => {
  console.log('in stayUpdated!!!', req.body)
  const { name , email, password } = req.body;

  const payload = {
    TableName : 'parent-users',
    Item: {
       name,
       Email: email,
       password
    }
  }


  await docClient.put(payload).promise();
})

app.listen(3000)