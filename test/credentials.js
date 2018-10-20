let credentials;

try {
  credentials = require('./credentials.json');
} catch (err) {
  credentials = {};
  credentials.consumerKey = process.env.TWITTER_CONSUMER_KEY || '';
  credentials.consumerSecret = process.env.TWITTER_CONSUMER_SECRET || '';
  credentials.accessToken = process.env.TWITTER_ACCESS_TOKEN || '';
  credentials.accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET || '';
  credentials.callBackUrl = process.env.TWITTER_CALL_BACK_URL || '';
}

module.exports = credentials;
