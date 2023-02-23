const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

// This should be a db or something better than just a var
// let requestHistory = [];

// app.use(express.json());

const wasteTime = () =>
  new Promise(
    resolve => setTimeout(() => resolve(`Your lucky number is ${Math.floor(Math.random() * 11)}!`), 2500)
  );

app.use(express.static(__dirname + '/modules'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/modules/index.html'));
});

app.get('/async', async (req, res) => {
  const result = await wasteTime();
  res.status(200).send(result);
});

app.listen(PORT);
console.log('Listening on port:', PORT);
