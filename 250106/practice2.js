/* 연습문제_2016년 */

/* 1차. 문제 분석 */
/* function solution(a, b) {
  // 매개변수를 받아 요일 확인
  // 해당 요일에 따라 text 적용
}

console.log(solution(5, 24)); */

// 날짜에 대한 코드 작성법에 대해 알지 못 함

/* 2차. 해당 공식 찾아가면서 풀이 */
/* function solution(a, b) {
  const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 매개변수를 받아 요일 확인
  const dayNumber = new Date(`2016-${a}-${b}`).getDay();
  // 해당 요일에 따라 text 적용
  // console.log(dayNumber);

  return dayName[dayNumber];
}

console.log(solution(5, 24)); */

/* 3차. 내장객체를 사용하지 않고 풀이 */
function solution(a, b) {
  // 월별 일수 배열 (2016년은 윤년)
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 요일 배열
  const weekDays = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  // (a-1)월까지의 총 일수 계산
  let totalDays = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDays += daysInMonth[i];
  }
  // b일까지의 경과일 수 계산
  totalDays += b - 1;

  // 요일 계산
  return weekDays[totalDays % 7];
}

console.log(solution(5, 24));
