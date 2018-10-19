# origraph-twitter-import
[![Build Status](https://travis-ci.org/origraph/origraph-twitter-import.svg?branch=master)](https://travis-ci.org/origraph/origraph-twitter-import)
[![Coverage Status](https://coveralls.io/repos/github/origraph/origraph-twitter-import/badge.svg?branch=master)](https://coveralls.io/github/origraph/origraph-twitter-import?branch=master)

Plugin to origraph.js for importing twitter data

# Installation and Usage

## Basic use in the browser
This will make the `window.origraph` global available to your scripts, and you can access the plugin through `window.origraph.plugins['twitter-import']`:
```html
<script src="https://cdn.jsdelivr.net/npm/origraph@0.1.2/dist/origraph.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/origraph-twitter-import@0.1.2/dist/origraphTwitterImport.umd.js"></script>
```

## Server-side apps or pre-bundled browser apps

Installation:
```bash
npm install origraph @origraph/twitter-import
```

Usage:
```js
const origraph = require('origraph');
const origraphTwitterImport = require('@origraph/twitter-import');
```

# Using this as a template for other plugins
This is meant as a pretty simple template for writing other origraph data import plugins. To create your own, you'll mostly need to:

- Create your own repository, ideally named `origraph-your-plugin-name`
- Copy over all the contents of this repository (except, of course, the `.git` directory)
- Edit (or re-`init`) `package.json` appropriately (using the `@origraph/your-plugin-name` scoping)
- Set up Travis / Coveralls
- Rename / edit files in `src`, and replace the `test`s with your own (`basicTests.js` is a good one to leave intact / a good place to start if you're new to testing)
- Update the contents of the `hooks` directory appropriately

## Building and Publishing
For testing purposes, register for Twitter developer credentials, and create a `test/credentials.json` file that looks like this (this should never be committed):

```json
{
  "consumer_key": " ... ",
  "consumer_secret": " ... ",
  "access_token_key": " ... ",
  "access_token_secret": " ... "
}
```
You should also add these as environment variables to Travis CI (as `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, etc).

- Update the version number in `package.json`
- `npm run build`
- `npm run test`
- `git commit -a -m "commit message"`
- `git push`
- (Verify Travis CI doesn't fail)
- `git tag -a #.#.# -m "tag annotation"`
- `git push --tags`
- `npm publish --access public`
- Edit / document the release on Github (optional)

## How people can use your published plugin
If you follow the above directions, you should be able to include your plugin in the browser in the same ways that this plugin is used (including the browser CDN and the `npm install @origraph/your-plugin-name` routes).
