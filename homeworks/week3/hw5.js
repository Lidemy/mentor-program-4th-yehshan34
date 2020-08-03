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
  const m = Number(lines[0]);
  /* eslint-disable  no-plusplus */
  for (let i = 1; i <= m; i++) {
    const [a, b, p] = lines[i].split(' ');
    /* eslint-disable  no-undef */
    if (BigInt(a) === BigInt(b)) {
      console.log('DRAW');
    } else if ((BigInt(a) > BigInt(b) && p === 1) || (BigInt(a) < BigInt(b) && p === -1)) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}
/* eslint-disable  no-unused-vars */
function compare(a, b, p) {
  if (a === b) return 'DRAW';

  // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
  // 那如果是比小怎麼辦？把 AB 對調就好
  // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
  // 但如果是比小，把 AB 對調，就會回傳 B 了
  if (p === -1) {
    const temp = a;
    /* eslint-disable  no-use-before-define */
    /* eslint-disable no-param-reassign */
    a = b;
    b = temp;
  }

  const lengthA = a.length;
  const lengthB = b.length;

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  return a > b ? 'A' : 'B';
}
