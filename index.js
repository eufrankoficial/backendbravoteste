const express = require('express');
const router = express.Router()
const app = express();

app.use(express.json())

app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});

app.use('/api', require('./routes'))

app.listen(5000);

