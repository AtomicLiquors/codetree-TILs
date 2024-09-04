const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').split('\n');


const [N, _] = lines[0].split(' ').filter(s => s !== '').map(Number);

const DP = new Array(2 * N + 1).fill(Number.MAX_SAFE_INTEGER);
DP[0] = 0;

lines.slice(1).forEach((line) => {
    const [amount, price] = line.split(' ').filter(s => s !== '').map(Number);
    
    for(let n = amount; n <= 2*N; n++){
        if(DP[n - amount] === Number.MAX_SAFE_INTEGER)
            continue;
        DP[n] = Math.min(price + DP[n - amount], DP[n]);
    }
})

let answer = Math.min(...DP.slice(N, 2 * N));

console.log(answer);