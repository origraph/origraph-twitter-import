import TwitterClient from 'twitter-node-client';

class TwitterImporter {
  constructor (origraph) {
    this.origraph = origraph;
  }
  async getStaticTable ({
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
export default TwitterImporter;
