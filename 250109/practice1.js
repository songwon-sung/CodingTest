/* 연습문제_과일 장수 */

/* 1차. */
function solution(k, m, score) {
  // score.length를 m으로 나눠 판매 가능 상자 수 확인
  const boxNumber = Math.floor(score.length / m);
  // console.log(boxNumber);

  // 사과 점수 score 배열을 오름차순으로 정렬하기
  const sortScore = score.sort((a, b) => a - b);
  console.log(sortScore);

  // score에서 (score.length % m)과 +m의 요소 값으로 판매이익 계산
  let maxPrice = 0;

  for (let i = sortScore.length % m; i < sortScore.length; i + m) {
    // 최저 점수 x 박스당 사과 개수 x 상자 개수
    return (maxPrice += score[i] * m * boxNumber);
  }

  return maxPrice;
}

// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

// 테스트케이스 2에서 실패
// 사과 상자의 수를 굳이 계산할 필요 없음

/* 2차. */
function solution(k, m, score) {
  // 사과 점수 score 배열을 오름차순으로 정렬하기
  const sortScore = score.sort((a, b) => a - b);
  // console.log(sortScore);

  // score에서 (score.length % m)과 +m의 요소 값으로 판매이익 계산
  let maxPrice = 0;

  for (let i = score.length % m; i < score.length; i += m) {
    // 상자에서 가장 낮은 점수 x 박스당 사과 개수
    maxPrice += sortScore[i] * m;
  }

  return maxPrice;
}

// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

/* 3차. 개선된 방법 고민 */
function solution(k, m, score) {
  // 점수 범위가 3부터 k까지이므로 count 배열을 k + 1 크기로 만든다.
  const count = new Array(k + 1).fill(0); // 0 ~ k까지 점수 개수 세기
  // [0,0,0,0]

  // 점수 배열에서 각 점수의 개수를 셈
  for (let i = 0; i < score.length; i++) {
    count[score[i]]++;
  }
  // [0,3,2,2]

  let maxPrice = 0;
  let totalApples = score.length; // 총 사과 개수
  // 7

  // 내림차순으로 처리 (k부터 3까지)
  for (let i = k; i >= 3; i--) {
    while (count[i] > 0) {
      totalApples--;

      // m개의 사과가 모이면 상자를 만들 수 있음
      if (totalApples % m === 0) {
        // 최저 점수를 가지고 있는 상자의 가격 계산
        maxPrice += i * m;
      }

      count[i]--;
    }
  }

  return maxPrice;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
// console.log(solution(9, 3, [9, 8, 7, 6, 5, 4, 3, 9, 6, 5, 7, 8])); // 예시 출력
// console.log(solution(5, 4, [5, 4, 3, 3, 5, 5, 4, 4, 3, 3, 5, 4])); // 예시 출력
