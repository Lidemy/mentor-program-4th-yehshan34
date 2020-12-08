/* eslint-disable no-plusplus, no-use-before-define, no-shadow, function-paren-newline,
comma-dangle, prefer-destructuring,camelcase,import/no-extraneous-dependencies,import/newline-after-import,  func-names,prefer-arrow-callback,max-len,eol-last */
const request = require('request');
const process = require('process');
const action = process.argv[2];
const firstKey = process.argv[3];
const secondKey = process.argv[4];

const list = () => {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    function (error, response, body) {
      if (error) {
        return console.log('錯誤，拿不到資料', error);
      }
      let book_content;
      try {
        book_content = JSON.parse(body);
      } catch (error) {
        return console.log('錯誤，拿不到資料', error);
      }
      for (let i = 0; i < book_content.length; i++) {
        console.log(book_content[i].id, book_content[i].name);
      }
      return book_content;
    }
  );
};

const read = (id) => {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    function (error, response, body) {
      if (error) {
        return console.log('錯誤，讀不到資料', error);
      }
      let book_content;
      try {
        book_content = JSON.parse(body);
      } catch (error) {
        return console.log('錯誤，讀不到資料', error);
      }
      console.log(`第 ${id} 筆資料：${book_content.name}`);
      return book_content;
    }
  );
};

const deleteID = (id) => {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    function callback(error, response, body) {
      if (error) {
        return console.log('錯誤，無法刪除資料', error);
      }
      console.log(`成功刪除第 ${id} 筆資料`);
      return body;
    }
  );
};

const create = (name) => {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name,
      }
    },
    function (error, response, body) {
      if (error) {
        return console.log('錯誤，無法新增資料', error);
      }
      console.log('新增資料成功');
      let book_content;
      try {
        book_content = JSON.parse(body);
      } catch (error) {
        return console.log('錯誤，無法新增資料', error);
      }
      console.log(`${book_content.id}, ${book_content.name}`);
      return book_content;
    }
  );
};

const update = (id, bookName) => {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${firstKey}`,
      form: {
        name: bookName,
      },
    },
    function (error, response, body) {
      if (error) {
        return console.log('錯誤，無法更新資料', error);
      }
      console.log('更新資料成功');
      let book_content;
      try {
        book_content = JSON.parse(body);
      } catch (error) {
        return console.log('錯誤，無法更新資料', error);
      }
      console.log(`第 ${book_content.id} 筆資料, 成功更新為： ${book_content.name}`);
      return book_content;
    }
  );
};

switch (action) {
  case 'list':
    list();
    break;
  case 'read':
    read(firstKey);
    break;
  case 'delete':
    deleteID(firstKey);
    break;
  case 'create':
    create(firstKey);
    break;
  case 'update':
    update(firstKey, secondKey);
    break;
  default:
    console.log('請執行以下指令： list, read, delete, create or update');
}