'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var origraph = _interopDefault(require('origraph'));

var name = "@origraph/twitter-import";
var version = "0.1.0";
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
	origraph: "^0.1.2-r1"
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

}

const twitterImporter = new TwitterImporter(origraph);
twitterImporter.version = pkg.version;
origraph.registerPlugin('twitter-import', twitterImporter);

module.exports = twitterImporter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ3JhcGhUd2l0dGVySW1wb3J0LmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1R3aXR0ZXJJbXBvcnRlci5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFR3aXR0ZXJJbXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChvcmlncmFwaCkge1xuICAgIHRoaXMub3JpZ3JhcGggPSBvcmlncmFwaDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlckltcG9ydGVyO1xuIiwiaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IG9yaWdyYXBoIGZyb20gJ29yaWdyYXBoJztcbmltcG9ydCBUd2l0dGVySW1wb3J0ZXIgZnJvbSAnLi9Ud2l0dGVySW1wb3J0ZXIuanMnO1xuXG5jb25zdCB0d2l0dGVySW1wb3J0ZXIgPSBuZXcgVHdpdHRlckltcG9ydGVyKG9yaWdyYXBoKTtcbnR3aXR0ZXJJbXBvcnRlci52ZXJzaW9uID0gcGtnLnZlcnNpb247XG5vcmlncmFwaC5yZWdpc3RlclBsdWdpbigndHdpdHRlci1pbXBvcnQnLCB0d2l0dGVySW1wb3J0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgdHdpdHRlckltcG9ydGVyO1xuIl0sIm5hbWVzIjpbIlR3aXR0ZXJJbXBvcnRlciIsImNvbnN0cnVjdG9yIiwib3JpZ3JhcGgiLCJ0d2l0dGVySW1wb3J0ZXIiLCJ2ZXJzaW9uIiwicGtnIiwicmVnaXN0ZXJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsZUFBTixDQUFzQjtFQUNwQkMsV0FBVyxDQUFFQyxXQUFGLEVBQVk7U0FDaEJBLFFBQUwsR0FBZ0JBLFdBQWhCOzs7OztBQ0VKLE1BQU1DLGVBQWUsR0FBRyxJQUFJSCxlQUFKLENBQW9CRSxRQUFwQixDQUF4QjtBQUNBQyxlQUFlLENBQUNDLE9BQWhCLEdBQTBCQyxHQUFHLENBQUNELE9BQTlCO0FBQ0FGLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixnQkFBeEIsRUFBMENILGVBQTFDOzs7OyJ9
