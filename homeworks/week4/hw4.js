/* eslint-disable no-plusplus, no-use-before-define, no-shadow, function-paren-newline,
eol-last, quote-props, prefer-arrow-callback, comma-dangle,import/no-extraneous-dependencies */
const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': '67kxr33g8cug6zxhc29z75n4ari0dx',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  },
  function callback(error, response, body) {
    if (error) {
      return console.log('發生錯誤', error);
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      return console.log('發生錯誤', error);
    }
    for (let i = 0; i < data.top.length; i++) {
      console.log(
        `${data.top[i].viewers}, ${data.top[i].game.name}`
      );
    }
    return data;
  });