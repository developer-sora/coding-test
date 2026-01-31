function addTenMinutes(time) {
  const hour = Math.floor(time / 100);
  const minute = time % 100;

  return minute + 10 >= 60
    ? (hour + 1) * 100 + (minute + 10 - 60)
    : hour * 100 + minute + 10;
}

function solution(schedules, timelogs, startday) {
  let result = 0;
  for (let i = 0; i < schedules.length; i++) {
    const limitTime = addTenMinutes(schedules[i]);
    let hasLate = false;
    for (let j = 0; j < 7; j++) {
      const day = (startday + j) % 7;
      const isWeekend = day === 0 || day === 6;
      if (timelogs[i][j] > limitTime && !isWeekend) {
        hasLate = true;
        break;
      }
    }
    if (!hasLate) result++;
  }
  return result;
}
