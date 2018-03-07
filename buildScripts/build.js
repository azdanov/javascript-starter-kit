/* eslint-disable import/no-extraneous-dependencies,no-console */
import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.babel';

process.env.NODE_ENV = 'production';

console.log(
  chalk.blue(
    'Generating minified bundle for production. This will take a moment..',
  ),
);

webpack({ ...webpackConfig, mode: process.env.NODE_ENV }).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.forEach(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.forEach(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(
    chalk.green(
      'Your app.js has been built for production and written to /dist!',
    ),
  );

  return 0;
});
