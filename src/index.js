/* eslint-disable import/no-extraneous-dependencies,no-console */

import numeral from 'numeral';
import './index.scss';

const courseValue = numeral(9000).format();
console.log(`This starter kit is over ${courseValue}!!!`);
