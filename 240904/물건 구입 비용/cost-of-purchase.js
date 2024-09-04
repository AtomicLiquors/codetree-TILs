const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').split('\n');


const [N, _] = lines[0].trim().split(' ').filter(s => s !== '').map(Number);

let maxAmount = N;

const shops = lines.slice(1).map((line) => {
    const [amount, price] = line.trim().split(' ').filter(s => s !== '').map(Number);
    maxAmount = Math.max(amount, maxAmount);
    return [amount, price];
})

const DP = new Array(maxAmount+1).fill(Number.MAX_SAFE_INTEGER);
DP[0] = 0;

shops.forEach((shop) => {
    const [amount, price] = shop;
    for(let n = amount; n <= maxAmount; n++){
        if(DP[n - amount] !== Number.MAX_SAFE_INTEGER)
            DP[n] = Math.min(price + DP[n - amount], DP[n]);
    }
})

let answer = Math.min(...DP.slice(N, DP.length));

console.log(answer);