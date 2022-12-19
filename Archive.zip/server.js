'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

app.get('/', (req, res, next) => {
  res.status(200).send('this is the cloud server');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('the hello path works');

})

app.listen(PORT, () => console.log('listening on port', PORT))