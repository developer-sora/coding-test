let fs = require("fs");
let [A,B] = fs.readFileSync("./Baekjoon/input.txt").toString().split(" ").map(Number);

let queue = [];
let cnt = 1;

function bfs(v){
    queue.push({num:v,cnt});
    while(queue.length!==0){
        let temp = queue.shift();
        if(temp.num===B){
            console.log(temp.cnt);
            process.exit();
        };
        let twice = temp.num*2;
        let plusOne = temp.num*10+1;
        if(twice <= B){
            queue.push({num:twice,cnt:temp.cnt+1});
        }
        if(plusOne <= B){
            queue.push({num:plusOne,cnt:temp.cnt+1});
        }
    }
}

bfs(A);

console.log(-1);