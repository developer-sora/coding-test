/* 
문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

// 내 풀이

function solution(brown, yellow) {
    let sum = brown+yellow;
    for(let i = 3; i < sum/2; i++){
        if(sum%i===0 && (i-2)*((sum/i)-2)===yellow){
            return [sum/i,i];
        }
    }
}

// 다른 사람 풀이

function solution(brown, yellow) {
    for (var i = 3; i <= (brown+yellow)/i; i++) { // /2보다 (brown+yellow)/i까지 도는게 더 효율적
        var x = Math.floor((brown+yellow)/i);
        if( (x-2)*(i-2)=== yellow) {
            break;
        }
    }

    return [x,i];
}

/*

완전 탐색
완전탐색은 간단히 가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법이다. 

① Brute Force 기법
이 방법은 반복 / 조건문을 통해 가능한 모든 방법을 단순히 찾는 경우를 의미한다.

*/