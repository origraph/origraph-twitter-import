let credentials;

try {
  credentials = require('./credentials.json');
} catch (err) {
  credentials = {};
  credentials.consumer_key = process.env.TWITTER_CONSUMER_KEY || '';
  credentials.consumer_secret = process.env.TWITTER_CONSUMER_SECRET || '';
  credentials.access_token_key = process.env.TWITTER_ACCESS_TOKEN_KEY || '';
  credentials.access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET || '';
}

module.exports = credentials;
