/* eslint-disable import/no-extraneous-dependencies,no-console,node/no-unsupported-features */

import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob@gmail.com',
    },
    {
      id: 2,
      firstName: 'Tammy',
      lastName: 'Norton',
      email: 'tnorton@gmail.com',
    },
    {
      id: 3,
      firstName: 'Tina',
      lastName: 'Lee',
      email: 'lee.tina@gmail.com',
    },
  ]);
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
