let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N,M,K,X] = input.shift().split(' ').map(Number);

const arr = input.map((v)=>v.split(' ').map(Number));

let graph = Array.from({length:N+1},()=>[]);
let visited = Array.from({length:N+1},()=>0);
let cnt = 0;
let queue = [];
let answer = [];

for(let [a,b] of arr) graph[a].push(b); // 인접 리스트 만들기

function bfs(v){
    queue.push({city:v,cnt});
    visited[v] = 1;
    while(queue.length!==0){
            let temp = queue.shift();
            if(temp.cnt > K){
                return;
            }
            if(temp.cnt===K){
                answer.push(temp.city);
            }
            graph[temp.city].forEach((i)=>{
                if(visited[i]!==1){
                visited[i] = 1;
                queue.push({city:i,cnt:temp.cnt+1});
                }
            });
    }
}

bfs(X);

if(answer.length===0){
    console.log(-1);
    process.exit();
}

answer.sort((a,b)=>a-b);

console.log(answer.join('\n').trim());