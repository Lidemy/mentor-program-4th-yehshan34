/* eslint-disable no-tabs */
/* eslint-disable indent */
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
	const temp = lines[0].split(' ');
	const n = Number(temp[0]);
	const m = Number(temp[1]);
	/* eslint-disable  no-plusplus */
	for (let i = n; i <= m; i++) {
		if (isNarcissistic(i)) {
			console.log(i);
		}
	}
}


// 回傳數字幾位數
function digitsCount(n) {
	if (n === 0) return 1;
	let result = 0;
	while (n !== 0) {
		/* eslint-disable  no-param-reassign */
		n = Math.floor(n / 10);
		/* eslint-disable  no-plusplus */
		result++;
	}
	return result;
}

function isNarcissistic(n) {
	// 幾位數
	let m = n;
	const digits = digitsCount(n);
	let sum = 0;
	while (m !== 0) {
		const num = m % 10;
		sum += num ** digits;
		m = Math.floor(m / 10);
	}
	// 可簡化成 return sum === n
	if (sum === n) {
		return true;
		/* eslint-disable  no-else-return */
	} else {
		return false;
	}
}
