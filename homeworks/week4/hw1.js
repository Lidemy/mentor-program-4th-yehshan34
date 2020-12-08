/* eslint-disable no-plusplus, no-use-before-define, no-shadow, function-paren-newline,
eol-last, quote-props, prefer-arrow-callback, comma-dangle,indent,camelcase,func-names,consistent-return,import/no-extraneous-dependencies,max-len */
const request = require('request');

request({
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  method: 'GET',
},
  function (error, response, body) {
    if (error) {
      return console.log('錯誤拿不到資料', error);
    }
    let book_content;
    try {
      book_content = JSON.parse(body);
    } catch (error) {
      return console.log('錯誤拿不到資料', error);
    }
    for (let i = 0; i < book_content.length; i++) {
      console.log(book_content[i].id, book_content[i].name);
    }
  });