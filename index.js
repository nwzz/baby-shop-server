const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World Im newaz world')
  })
  
  
  
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })