/* 1차 */
/* function solution(number, limit, power) {
  let total = 0;

  // 1~number까지 약수 개수 count
  for (let i = 1; i <= number; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
      // console.log(count);
    }

    // 약수 개수 >= limit라면 power, 아니라면 count
    if (count > limit) {
      total += power;
    } else total += count;
    // console.log(total);
  }

  return total;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2)); */

// 시간 초과!! (실패)

/* 2차 풀이 문제점 분석 */
/* function solution(number, limit, power) {
  let total = 0;

  // 1~number까지 각 숫자의 약수 개수
  for (let i = 1; i <= number; i++) {
    let count = 0;

    // 약수 개수 계산 (최적화)
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++; // 작은 약수
        if (j !== i / j) count++; // 작은 약수와 짝이 되는 큰 약수
      }
      // console.log(count);
    }

    // 약수 개수 >= limit라면 power, 아니라면 count
    total += count > limit ? power : count;
    // console.log(total);
  }

  return total;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2)); */

// 약수를 일일이 계산하는 것은 비효율적임
// 약수는 대칭적으로 존재함을 이용하여 계산 시간 줄일 수 있음
// 이중반복문 대신 단일 반복문 사용

/* 3차. 개선 된 방법 고민 */
function solution(number, limit, power) {
  // 각 숫자의 약수 개수를 저장할 배열
  const arrCountNumber = Array(number + 1).fill(0);

  // 약수 개수 미리 계산
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      arrCountNumber[j]++;
    }
  }

  // 철의 총 무게 계산
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += arrCountNumber[i] > limit ? power : arrCountNumber[i];
  }

  return total;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21

// i는 현재 확인 중인 약수 후보
// 즉 i가 약수인지 확인하려는 숫자
// j는 i의 배수를 순회
