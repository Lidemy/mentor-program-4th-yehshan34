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
  /* eslint-disable  no-plusplus */
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}


function isPrime(n) {
  if (n === 1) {
    return false;
  }

  const num = Math.sqrt(n);
  /* eslint-disable  no-plusplus */
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
