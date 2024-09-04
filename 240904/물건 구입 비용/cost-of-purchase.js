const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').split('\n');

const MAX_PRICE = 20 * 1000 + 1;

const [N, P] = lines[0].split(' ').filter(s => s !== '').map(Number);

const DP = new Array(N+1).fill(MAX_PRICE);
DP[0] = 0;

lines.slice(1).forEach((line) => {
    const [amount, price] = line.split(' ').filter(s => s !== '').map(Number);
    
    for(let n = amount; n <= N; n++){
        DP[n] = Math.min(price + DP[n - amount], DP[n]);
    }
})

console.log(DP[N]);