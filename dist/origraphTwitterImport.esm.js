import TwitterClient from 'twitter-node-client';
import origraph from 'origraph';

var name = "@origraph/twitter-import";
var version = "0.1.3";
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
	"twitter-node-client": "0.0.6"
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
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
    callBackUrl
  }) {
    return new Promise((resolve, reject) => {
      const client = new TwitterClient.Twitter({
        consumerKey,
        consumerSecret,
        accessToken,
        accessTokenSecret,
        callBackUrl
      });
      const functionName = method.toLowerCase() + 'CustomApiCall';
      client[functionName](endpoint, params, reject, data => {
        resolve(this.origraph.addStaticTable({
          data: JSON.parse(data),
          name: `Twitter: ${endpoint}`
        }));
      });
    });
  }

}

const twitterImporter = new TwitterImporter(origraph);
twitterImporter.version = pkg.version;
origraph.registerPlugin('twitter-import', twitterImporter);

export default twitterImporter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ3JhcGhUd2l0dGVySW1wb3J0LmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1R3aXR0ZXJJbXBvcnRlci5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0dGVyQ2xpZW50IGZyb20gJ3R3aXR0ZXItbm9kZS1jbGllbnQnO1xuXG5jbGFzcyBUd2l0dGVySW1wb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAob3JpZ3JhcGgpIHtcbiAgICB0aGlzLm9yaWdyYXBoID0gb3JpZ3JhcGg7XG4gIH1cbiAgYXN5bmMgZ2V0U3RhdGljVGFibGUgKHtcbiAgICBlbmRwb2ludCxcbiAgICBtZXRob2QsXG4gICAgcGFyYW1zLFxuICAgIGNvbnN1bWVyS2V5LFxuICAgIGNvbnN1bWVyU2VjcmV0LFxuICAgIGFjY2Vzc1Rva2VuLFxuICAgIGFjY2Vzc1Rva2VuU2VjcmV0LFxuICAgIGNhbGxCYWNrVXJsXG4gIH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFR3aXR0ZXJDbGllbnQuVHdpdHRlcih7XG4gICAgICAgIGNvbnN1bWVyS2V5LFxuICAgICAgICBjb25zdW1lclNlY3JldCxcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICAgIGFjY2Vzc1Rva2VuU2VjcmV0LFxuICAgICAgICBjYWxsQmFja1VybFxuICAgICAgfSk7XG4gICAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBtZXRob2QudG9Mb3dlckNhc2UoKSArICdDdXN0b21BcGlDYWxsJztcbiAgICAgIGNsaWVudFtmdW5jdGlvbk5hbWVdKGVuZHBvaW50LCBwYXJhbXMsIHJlamVjdCwgZGF0YSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcy5vcmlncmFwaC5hZGRTdGF0aWNUYWJsZSh7XG4gICAgICAgICAgZGF0YTogSlNPTi5wYXJzZShkYXRhKSxcbiAgICAgICAgICBuYW1lOiBgVHdpdHRlcjogJHtlbmRwb2ludH1gXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUd2l0dGVySW1wb3J0ZXI7XG4iLCJpbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgb3JpZ3JhcGggZnJvbSAnb3JpZ3JhcGgnO1xuaW1wb3J0IFR3aXR0ZXJJbXBvcnRlciBmcm9tICcuL1R3aXR0ZXJJbXBvcnRlci5qcyc7XG5cbmNvbnN0IHR3aXR0ZXJJbXBvcnRlciA9IG5ldyBUd2l0dGVySW1wb3J0ZXIob3JpZ3JhcGgpO1xudHdpdHRlckltcG9ydGVyLnZlcnNpb24gPSBwa2cudmVyc2lvbjtcbm9yaWdyYXBoLnJlZ2lzdGVyUGx1Z2luKCd0d2l0dGVyLWltcG9ydCcsIHR3aXR0ZXJJbXBvcnRlcik7XG5leHBvcnQgZGVmYXVsdCB0d2l0dGVySW1wb3J0ZXI7XG4iXSwibmFtZXMiOlsiVHdpdHRlckltcG9ydGVyIiwiY29uc3RydWN0b3IiLCJvcmlncmFwaCIsImdldFN0YXRpY1RhYmxlIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJwYXJhbXMiLCJjb25zdW1lcktleSIsImNvbnN1bWVyU2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlblNlY3JldCIsImNhbGxCYWNrVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGllbnQiLCJUd2l0dGVyQ2xpZW50IiwiVHdpdHRlciIsImZ1bmN0aW9uTmFtZSIsInRvTG93ZXJDYXNlIiwiZGF0YSIsImFkZFN0YXRpY1RhYmxlIiwiSlNPTiIsInBhcnNlIiwibmFtZSIsInR3aXR0ZXJJbXBvcnRlciIsInZlcnNpb24iLCJwa2ciLCJyZWdpc3RlclBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLGVBQU4sQ0FBc0I7RUFDcEJDLFdBQVcsQ0FBRUMsV0FBRixFQUFZO1NBQ2hCQSxRQUFMLEdBQWdCQSxXQUFoQjs7O1FBRUlDLGNBQU4sQ0FBc0I7SUFDcEJDLFFBRG9CO0lBRXBCQyxNQUZvQjtJQUdwQkMsTUFIb0I7SUFJcEJDLFdBSm9CO0lBS3BCQyxjQUxvQjtJQU1wQkMsV0FOb0I7SUFPcEJDLGlCQVBvQjtJQVFwQkM7R0FSRixFQVNHO1dBQ00sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtZQUNoQ0MsTUFBTSxHQUFHLElBQUlDLGFBQWEsQ0FBQ0MsT0FBbEIsQ0FBMEI7UUFDdkNWLFdBRHVDO1FBRXZDQyxjQUZ1QztRQUd2Q0MsV0FIdUM7UUFJdkNDLGlCQUp1QztRQUt2Q0M7T0FMYSxDQUFmO1lBT01PLFlBQVksR0FBR2IsTUFBTSxDQUFDYyxXQUFQLEtBQXVCLGVBQTVDO01BQ0FKLE1BQU0sQ0FBQ0csWUFBRCxDQUFOLENBQXFCZCxRQUFyQixFQUErQkUsTUFBL0IsRUFBdUNRLE1BQXZDLEVBQStDTSxJQUFJLElBQUk7UUFDckRQLE9BQU8sQ0FBQyxLQUFLWCxRQUFMLENBQWNtQixjQUFkLENBQTZCO1VBQ25DRCxJQUFJLEVBQUVFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBRDZCO1VBRW5DSSxJQUFJLEVBQUcsWUFBV3BCLFFBQVM7U0FGckIsQ0FBRCxDQUFQO09BREY7S0FUSyxDQUFQOzs7OztBQ1pKLE1BQU1xQixlQUFlLEdBQUcsSUFBSXpCLGVBQUosQ0FBb0JFLFFBQXBCLENBQXhCO0FBQ0F1QixlQUFlLENBQUNDLE9BQWhCLEdBQTBCQyxHQUFHLENBQUNELE9BQTlCO0FBQ0F4QixRQUFRLENBQUMwQixjQUFULENBQXdCLGdCQUF4QixFQUEwQ0gsZUFBMUM7Ozs7In0=
