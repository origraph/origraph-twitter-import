const origraph = require('origraph');
const origraphTwitterImport = require('../dist/origraphTwitterImport.cjs.js');
const credentials = require('./credentials.json');

describe('Import Tests', () => {
  afterAll(async () => {
    origraph.deleteAllClasses();
    origraph.deleteAllUnusedTables();
  });

  test('load and read a CSV file', async () => {
    expect.assertions(1);

    const options = Object.assign({
      endpoint: 'search/tweets',
      method: 'get',
      params: {
        q: 'nasa'
      }
    }, credentials);

    const classObj = await origraphTwitterImport.getStaticTable(options);

    const result = [];
    for await (const wrappedItem of classObj.table.iterate({ limit: Infinity })) {
      result.push(wrappedItem.row);
    }

    // Verify that it matches what we expect
    expect(result.length).toEqual(2);
  });
});
