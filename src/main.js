import pkg from '../package.json';
import origraph from 'origraph';
import TwitterImporter from './TwitterImporter.js';

const twitterImporter = new TwitterImporter(origraph);
twitterImporter.version = pkg.version;
origraph.registerPlugin('twitter-import', twitterImporter);
export default twitterImporter;
