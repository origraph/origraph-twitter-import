/* globals origraph */
import pkg from '../package.json';
import TwitterImporter from './TwitterImporter.js';

const twitterImporter = new TwitterImporter(origraph);
twitterImporter.version = pkg.version;
origraph.registerPlugin('twitter-import', twitterImporter);
export default twitterImporter;
