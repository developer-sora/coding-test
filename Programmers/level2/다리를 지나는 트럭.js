function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let answer = 0;

  while (bridge.length) {
    bridge.shift();
    answer++;
    if (truck_weights.length) {
      let sum = bridge.reduce((acc, cur) => acc + cur, 0);
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return answer;
}
