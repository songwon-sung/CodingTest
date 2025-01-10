/* 연습문제_소수 찾기 */

/* 1차 */
/* function solution(n) {
  // 2부터 n까지 배열만들기
  const arr = [];

  for (let i = 2; i < n + 1; i++) {
    arr.push(i);
  }

  // 각 숫자당 2부터 n까지 나눠서 나머지가 0이면 카운트하여 배열 생성
  const countArr = [];

  arr.map((num) => {
    let count = 0;

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) count++;
    }

    countArr.push(count);
  });

  // countArr에서 1의 개수 카운트
  let count = 0;
  countArr.forEach((n) => (n === 1 ? count++ : 0));

  return count;
}

console.log(solution(10));
console.log(solution(5)); */

// 실패: 시간 초과

/* 2차 */
/* function solution(n) {
  // 0부터 n까지 0으로 배열 만들기
  let arr = new Array(n + 1).fill(0);

  // 소수 찾아서 소수이면 1
  const newArr = arr.map((num, index) => {
    if (index < 2) return 0;
    for (let i = 2; i <= index; i++) {
      if (index % i === 0) num += 1;
    }
    return num;
  });

  // 배열 중 1인 값만 count
  let count = 0;
  newArr.forEach((number) => {
    if (number === 1) count += 1;
  });

  return count;
}

console.log(solution(5));
console.log(solution(10)); */

// 실패: 시간 초과

/* 3차. gpt 도움: 에라토스테네스의 체 사용 */
function solution(n) {
  // 1이하는 소수 없음
  if (n < 2) return 0;

  // 0부터 n까지 0으로 배열 만들기
  let arr = new Array(n + 1).fill(true);

  // arr 배열에서 0과 1은 소수가 아님
  arr[0] = false;
  arr[1] = false;

  // 에라토스테네스의 체 알고리즘
  for (let i = 2; i < Math.sqrt(n); i++) {
    // i가 소수일 때
    if (arr[i]) {
      // i의 배수는 소수가 아님
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // 소수 개수 세기
  return arr.reduce((count, value) => count + (value ? 1 : 0), 0);
}

console.log(solution(5));
// console.log(solution(10));
