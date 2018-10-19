import Twitter from 'twitter';
import origraph from 'origraph';

var name = "@origraph/twitter-import";
var version = "0.1.1";
var description = "Plugin to origraph.js for importing twitter data";
var main = "dist/origraphTwitterImport.cjs.js";
var module$1 = "dist/origraphTwitterImport.esm.js";
var browser = "dist/origraphTwitterImport.umd.js";
var scripts = {
	build: "rollup -c --environment TARGET:all",
	watch: "rollup -c -w",
	watchcjs: "rollup -c -w --environment TARGET:cjs",
	watchumd: "rollup -c -w --environment TARGET:umd",
	watchesm: "rollup -c -w --environment TARGET:esm",
	test: "jest --runInBand",
	pretest: "rollup -c --environment TARGET:cjs",
	debug: "rollup -c --environment TARGET:cjs,SOURCEMAP:false && node --inspect-brk node_modules/.bin/jest --runInBand -t",
	coveralls: "cat ./coverage/lcov.info | node node_modules/.bin/coveralls"
};
var files = [
	"dist"
];
var repository = {
	type: "git",
	url: "git+https://github.com/origraph/origraph-twitter-import.git"
};
var author = "Alex Bigelow";
var license = "MIT";
var bugs = {
	url: "https://github.com/origraph/origraph-twitter-import/issues"
};
var homepage = "https://github.com/origraph/origraph-twitter-import#readme";
var devDependencies = {
	"@babel/core": "^7.1.2",
	"@babel/plugin-proposal-async-generator-functions": "^7.1.0",
	"@babel/preset-env": "^7.1.0",
	"babel-core": "^7.0.0-0",
	"babel-jest": "^23.6.0",
	coveralls: "^3.0.2",
	jest: "^23.6.0",
	rollup: "^0.66.3",
	"rollup-plugin-babel": "^4.0.3",
	"rollup-plugin-commonjs": "^9.1.8",
	"rollup-plugin-json": "^3.1.0",
	"rollup-plugin-node-builtins": "^2.1.2",
	"rollup-plugin-node-globals": "^1.4.0",
	"rollup-plugin-node-resolve": "^3.4.0",
	"rollup-plugin-string": "^2.0.2"
};
var dependencies = {
	origraph: "^0.1.3",
	twitter: "^1.7.1"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
	"jsnext:main": "dist/origraphTwitterImport.esm.js",
	browser: browser,
	scripts: scripts,
	files: files,
	repository: repository,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	dependencies: dependencies
};

class TwitterImporter {
  constructor(origraph$$1) {
    this.origraph = origraph$$1;
  }

  async getStaticTable({
    endpoint,
    method,
    params,
    consumer_key,
    // eslint-disable-line camelcase
    consumer_secret,
    // eslint-disable-line camelcase
    access_token_key,
    // eslint-disable-line camelcase
    access_token_secret // eslint-disable-line camelcase

  }) {
    const client = new Twitter({
      consumer_key,
      consumer_secret,
      access_token_key,
      access_token_secret
    });
    const data = await client[method](endpoint, params);
    return this.origraph.addStaticTable({
      data,
      name: `Twitter: ${endpoint}`
    });
  }

}

const twitterImporter = new TwitterImporter(origraph);
twitterImporter.version = pkg.version;
origraph.registerPlugin('twitter-import', twitterImporter);

export default twitterImporter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ3JhcGhUd2l0dGVySW1wb3J0LmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1R3aXR0ZXJJbXBvcnRlci5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0dGVyIGZyb20gJ3R3aXR0ZXInO1xuXG5jbGFzcyBUd2l0dGVySW1wb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAob3JpZ3JhcGgpIHtcbiAgICB0aGlzLm9yaWdyYXBoID0gb3JpZ3JhcGg7XG4gIH1cbiAgYXN5bmMgZ2V0U3RhdGljVGFibGUgKHtcbiAgICBlbmRwb2ludCxcbiAgICBtZXRob2QsXG4gICAgcGFyYW1zLFxuICAgIGNvbnN1bWVyX2tleSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgICBjb25zdW1lcl9zZWNyZXQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gICAgYWNjZXNzX3Rva2VuX2tleSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgICBhY2Nlc3NfdG9rZW5fc2VjcmV0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIH0pIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgVHdpdHRlcih7XG4gICAgICBjb25zdW1lcl9rZXksXG4gICAgICBjb25zdW1lcl9zZWNyZXQsXG4gICAgICBhY2Nlc3NfdG9rZW5fa2V5LFxuICAgICAgYWNjZXNzX3Rva2VuX3NlY3JldFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnRbbWV0aG9kXShlbmRwb2ludCwgcGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5vcmlncmFwaC5hZGRTdGF0aWNUYWJsZSh7XG4gICAgICBkYXRhLFxuICAgICAgbmFtZTogYFR3aXR0ZXI6ICR7ZW5kcG9pbnR9YFxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUd2l0dGVySW1wb3J0ZXI7XG4iLCJpbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgb3JpZ3JhcGggZnJvbSAnb3JpZ3JhcGgnO1xuaW1wb3J0IFR3aXR0ZXJJbXBvcnRlciBmcm9tICcuL1R3aXR0ZXJJbXBvcnRlci5qcyc7XG5cbmNvbnN0IHR3aXR0ZXJJbXBvcnRlciA9IG5ldyBUd2l0dGVySW1wb3J0ZXIob3JpZ3JhcGgpO1xudHdpdHRlckltcG9ydGVyLnZlcnNpb24gPSBwa2cudmVyc2lvbjtcbm9yaWdyYXBoLnJlZ2lzdGVyUGx1Z2luKCd0d2l0dGVyLWltcG9ydCcsIHR3aXR0ZXJJbXBvcnRlcik7XG5leHBvcnQgZGVmYXVsdCB0d2l0dGVySW1wb3J0ZXI7XG4iXSwibmFtZXMiOlsiVHdpdHRlckltcG9ydGVyIiwiY29uc3RydWN0b3IiLCJvcmlncmFwaCIsImdldFN0YXRpY1RhYmxlIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJwYXJhbXMiLCJjb25zdW1lcl9rZXkiLCJjb25zdW1lcl9zZWNyZXQiLCJhY2Nlc3NfdG9rZW5fa2V5IiwiYWNjZXNzX3Rva2VuX3NlY3JldCIsImNsaWVudCIsIlR3aXR0ZXIiLCJkYXRhIiwiYWRkU3RhdGljVGFibGUiLCJuYW1lIiwidHdpdHRlckltcG9ydGVyIiwidmVyc2lvbiIsInBrZyIsInJlZ2lzdGVyUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsZUFBTixDQUFzQjtFQUNwQkMsV0FBVyxDQUFFQyxXQUFGLEVBQVk7U0FDaEJBLFFBQUwsR0FBZ0JBLFdBQWhCOzs7UUFFSUMsY0FBTixDQUFzQjtJQUNwQkMsUUFEb0I7SUFFcEJDLE1BRm9CO0lBR3BCQyxNQUhvQjtJQUlwQkMsWUFKb0I7O0lBS3BCQyxlQUxvQjs7SUFNcEJDLGdCQU5vQjs7SUFPcEJDLG1CQVBvQjs7R0FBdEIsRUFRRztVQUNLQyxNQUFNLEdBQUcsSUFBSUMsT0FBSixDQUFZO01BQ3pCTCxZQUR5QjtNQUV6QkMsZUFGeUI7TUFHekJDLGdCQUh5QjtNQUl6QkM7S0FKYSxDQUFmO1VBTU1HLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNOLE1BQUQsQ0FBTixDQUFlRCxRQUFmLEVBQXlCRSxNQUF6QixDQUFuQjtXQUNPLEtBQUtKLFFBQUwsQ0FBY1ksY0FBZCxDQUE2QjtNQUNsQ0QsSUFEa0M7TUFFbENFLElBQUksRUFBRyxZQUFXWCxRQUFTO0tBRnRCLENBQVA7Ozs7O0FDbEJKLE1BQU1ZLGVBQWUsR0FBRyxJQUFJaEIsZUFBSixDQUFvQkUsUUFBcEIsQ0FBeEI7QUFDQWMsZUFBZSxDQUFDQyxPQUFoQixHQUEwQkMsR0FBRyxDQUFDRCxPQUE5QjtBQUNBZixRQUFRLENBQUNpQixjQUFULENBQXdCLGdCQUF4QixFQUEwQ0gsZUFBMUM7Ozs7In0=
