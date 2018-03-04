/* eslint-disable import/no-extraneous-dependencies,no-console,node/no-unsupported-features */

import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.babel';

const port = 3000;
const app = express();
const compiler = webpack(Object.assign({}, config, { mode: 'production' }));

app.use(
  webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }),
);

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
