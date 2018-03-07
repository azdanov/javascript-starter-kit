/* eslint-disable no-console,import/no-extraneous-dependencies */
import fs from 'fs';
import chalk from 'chalk';
import jsf from 'json-schema-faker';
import faker from 'faker';
import { schema } from './mockDataSchema';

jsf.extend('faker', () => faker);

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, err => {
  if (err) {
    return console.log(chalk.red(err));
  }

  return console.log(chalk.green('Mock data generated.'));
});
