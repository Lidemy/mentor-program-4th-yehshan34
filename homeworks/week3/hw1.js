/* eslint-disable no-tabs */
/* eslint-disable indent */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
});

const lines = [];
/* eslint-disable prefer-arrow-callback */
rl.on('line', function (line) {
	lines.push(line);
});

rl.on('close', function () {
	/* eslint-disable  no-use-before-define */
	solve(lines);
});

/* eslint-disable  no-shadow */
function solve(lines) {
	let string = '';
	const square = '*';
	/* eslint-disable  no-plusplus */
	for (let i = 0; i < lines; i++) {
		string += square;
		console.log(string);
	}
}
