/* eslint-disable no-plusplus, no-use-before-define, no-shadow, function-paren-newline,
comma-dangle, prefer-destructuring,import/no-extraneous-dependencies,import/newline-after-import,func-names,prefer-arrow-callback,camelcase,eol-last,max-len */

const request = require('request');
const process = require('process');
const keyword = process.argv[2];

request(
  `https://restcountries.eu/rest/v2/name/${keyword}`,
  function (error, response, body) {
    if (error) {
      return console.log('錯誤，找不到國家資訊', error);
    }
    let country_info;
    try {
      country_info = JSON.parse(body);
    } catch (error) {
      return console.log('錯誤，找不到國家資訊', error);
    }
    for (let i = 0; i < country_info.length; i++) {
      console.log(
        '============\n',
        `國家：${country_info[i].name}\n`,
        `首都：${country_info[i].capital}\n`,
        `貨幣：${country_info[i].currencies[0].code}\n`,
        `國碼：${country_info[i].callingCodes}\n`,
      );
    }
    return country_info;
  });