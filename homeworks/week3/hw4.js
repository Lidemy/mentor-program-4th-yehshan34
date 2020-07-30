const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];
/* eslint-disable  prefer-arrow-callback */
rl.on('line', function (line) {
  lines.push(line);
});

rl.on('close', function () {
  /* eslint-disable  no-use-before-define */
  solve(lines);
});

/* eslint-disable  no-shadow */
function solve(lines) {
  const str = lines[0];
  if (reverse(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

// abcd
// dcba
function reverse(str) {
  let result = '';
  /* eslint-disable  no-plusplus */
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
