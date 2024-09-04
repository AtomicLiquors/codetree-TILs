const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.forEach((line) => {
    const arr = line.trim().split(' ').map(Number);
    console.log(arr.reduce((acc, e) => acc + e, 0));
})