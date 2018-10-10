const twitterImporter = require('../dist/origraphTwitterImport.cjs.js');
const pkg = require('../package.json');

describe('Basic Tests', () => {
  test('Version check', () => {
    expect(pkg.version).toBe(twitterImporter.version);
  });
});
