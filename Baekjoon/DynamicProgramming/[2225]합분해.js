let fs = require("fs");
let [N,K] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let dp = Array.from(Array(N+1), ()=>Array(K+1).fill(0));

for(let i = 1; i <= N; i++){
    dp[i][1] = 1;
}

for(let j = 1; j <= K; j++){
    dp[1][j] = j;
}

for(let i = 2; i <= N; i++){
    for(let j = 2; j <= K; j++){
        dp[i][j] = dp[i][j-1] + dp[i-1][j] % 1000000000;
    }
}

console.log(dp[N][K]);
