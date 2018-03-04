/* eslint-disable import/no-extraneous-dependencies,no-console */

const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
