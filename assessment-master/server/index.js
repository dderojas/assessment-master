require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const bcrypt = require('bcrypt');

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

app.post('/signin', async (req, res) => {
  console.log('in signin!!!!', req.body)

  const { email, password } = req.body;

  const payload = {
    TableName: "parent-users",
    KeyConditionExpression: 'Email=:email',
    ExpressionAttributeValues: {
      ':email': email
    }
  }

  const results = await docClient.query(payload).promise();
  console.log(results, 'results???')

  if (results.Items.length === 0) {
    return res.status(400).send('no user')
  }

  try {
    if (await bcrypt.compare(password, results.Items[0].hashPassword)) {
      res.send({ success: 'sucesssssss' })
    } else {
      res.send('no correct')
    }
  } catch(e) {
    res.status(500).send()
  }
})

app.post('/stayUpdated', async (req, res) => {
  console.log('in stayUpdated!!!', req.body)
  const { name , email, password } = req.body;

  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)

  const payload = {
    TableName : 'parent-users',
    Item: {
       name,
       Email: email,
       hashPassword
    }
  }

  try {
    await docClient.put(payload).promise();
    res.send('Created User')

  } catch(e) {
    res.status(500).send()
  }
})

app.listen(3000)