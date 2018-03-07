import { readFile } from 'fs';
import { promisify } from 'util';
import cheerio from 'cheerio';

const readFileAsync = promisify(readFile);

describe('index', () => {
  it('should exist', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('index.html', () => {
  let index;
  let $;
  beforeAll(async () => {
    index = await readFileAsync('./src/index.html', 'utf-8');
    $ = cheerio.load(index);
  });

  it('should contain h1', () => {
    expect($('body').find('h1')).toHaveLength(1);
  });

  it('should say users', () => {
    expect($('h1#title').text()).toBe('Users');
  });
});
