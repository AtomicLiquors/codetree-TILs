const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');

const rowAvg = [];
const cols = [0, 0, 0, 0];

let matrixSum = 0;

lines.forEach((line) => {
    const arr = line.trim().split(' ').map(Number);
    const lineSum = arr.reduce((acc, e, idx) => {
            cols[idx] += e;
            return acc + e;
        }, 0);
    matrixSum += lineSum;
    rowAvg.push((lineSum / 4).toFixed(1));
})

cols.forEach((e, idx) => cols[idx] = (e/2).toFixed(1));
console.log(rowAvg.join(' '));
console.log(cols.join(' '));
console.log((matrixSum / 8).toFixed(1));