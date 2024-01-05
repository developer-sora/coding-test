let fs = require("fs");
let [T,...input] = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

let arr = [];
let cnt = 0;

let direction = [
    {x:-2,y:-1},
    {x:-1,y:-2},
    {x:1,y:-2},
    {x:2,y:-1},
    {x:-2,y:1},
    {x:-1,y:2},
    {x:2,y:1},
    {x:1,y:2}
];

for(let i = 0; i < input.length; i+=3){
    let start = input[i+1].split(" ").map(Number);
    let final = input[i+2].split(" ").map(Number);
    arr.push({l:+input[i],start,final})
}

let queue = [];

let answer = [];

function bfs(start,final,length){
    queue.push({x:start[0], y:start[1], cnt});
    let visited = Array.from(Array(length), () => Array(length).fill(false));
    visited[start[0]][start[1]] = true;
    while(queue.length!==0){
    let temp = queue.shift();
    if(temp.x === final[0] && temp.y === final[1]){
        answer.push(temp.cnt);
        queue = [];
        return;
    }
    for(let i = 0; i < direction.length; i++){
        let x = temp.x+direction[i].x;
        let y = temp.y+direction[i].y;
        if(x >= 0 && x < length && y >= 0 && y < length){
            if(!visited[x][y]){
            visited[x][y] = true;
            queue.push({x,y,cnt:temp.cnt+1});
            }
        }
    }
}
}

for(let j = 0; j < arr.length; j++){
    bfs(arr[j].start,arr[j].final,arr[j].l);
}

console.log(answer.join('\n'));

