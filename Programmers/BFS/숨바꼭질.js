let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0].split(" ")[0]);
let K = Number(input[0].split(" ")[1]);

let visited = new Array(100001).fill(0);
let answer = 0;

function BFS(){
    let queue = [];
    queue.push(N);
    visited[N] = 1;
    let time = 0;

    while(queue.length > 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let point = queue.shift();
            if(point === K) return time;
            for(let next of [point-1, point+1, point*2]){
                if(next >= 0 && next<=100000 && visited[next]===0){
                    visited[next]=1;
                    queue.push(next)
                }
            }
        }
        time++;
    }
}

answer = BFS();
console.log(answer);