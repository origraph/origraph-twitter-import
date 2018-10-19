import Twitter from 'twitter';

class TwitterImporter {
  constructor (origraph) {
    this.origraph = origraph;
  }
  async getStaticTable ({
    endpoint,
    method,
    params,
    consumer_key, // eslint-disable-line camelcase
    consumer_secret, // eslint-disable-line camelcase
    access_token_key, // eslint-disable-line camelcase
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
export default TwitterImporter;
