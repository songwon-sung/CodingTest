/* 완전탐색_모의고사 */

/* 1차. 문제 풀이 순서는 생각을 했지만 코드 작성 못 함 */
/* function solution(answers) {
  // 학생들의 정답지 배열
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const students = [arr1, arr2, arr3];

  // 학생 점수 배열
  let scores = [0, 0, 0];

  // 학생들의 정답을 정답지와 비교하여 점수 계산
  students.map((student, idx) => {
    if (student[idx].length >= answers.length) {
      for (let i = 0; i < answers.length; i++) {
        student[idx][i] === answers[i] && score1++;
      }
    }
  });
}

console.log(solution([1, 2, 3, 4, 5])); */

/* 2차. 자료들을 참고하면서 작성 */
/* function solution(answers) {
  // 학생들의 정답지 배열
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const students = [arr1, arr2, arr3];

  // 학생 점수 배열
  let scores = [0, 0, 0];

  // 학생들의 정답을 정답지와 비교하여 점수 계산
  for (let i = 0; i < answers.length; i++) {
    // 학생들의 각 정답 배열을 반복하여 비교 후 점수 계산
    if (answers[i] === students[0][i % arr1.length]) scores[0]++;
    if (answers[i] === students[1][i % arr1.length]) scores[1]++;
    if (answers[i] === students[2][i % arr1.length]) scores[2]++;
  }

  // 최고 점수 계산
  const maxScore = Math.max(...scores);

  // 최고 점수 학생 찾기
  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) result.push(i + 1);
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); */

// 코드 실행 시 성공했지만 제출 후 다른 테스트에서 실패
// 학생 점수 계산 시 arr1로 모두 작성하는 실수...

/* 3차. */
function solution(answers) {
  // 학생들의 정답지 배열
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const students = [arr1, arr2, arr3];

  // 학생 점수 배열
  let scores = [0, 0, 0];

  // 학생들의 정답을 정답지와 비교하여 점수 계산
  for (let i = 0; i < answers.length; i++) {
    // 학생들의 각 정답 배열을 반복하여 비교 후 점수 계산
    if (answers[i] === students[0][i % arr1.length]) scores[0]++;
    if (answers[i] === students[1][i % arr2.length]) scores[1]++;
    if (answers[i] === students[2][i % arr3.length]) scores[2]++;
  }

  // 최고 점수 계산
  const maxScore = Math.max(...scores);

  // 최고 점수 학생 찾기
  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) result.push(i + 1);
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

/* 4차. 다른 풀이 방식 검토 (gpt) */
/* function solution(answers) {
  // 학생들의 정답 배열
  const arrs = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 학생별 점수 계산
  const scores = arrs.map((arr) => {
    return answers.reduce((score, answer, idx) => {
      return score + (answer === arr[idx % arr.length] ? 1 : 0);
    }, 0);
  });

  // 최고 점수 계산
  const maxScore = Math.max(...scores);

  // 최고 점수를 받은 학생 번호 추출
  return scores
    .map((score, idx) => (score === maxScore ? idx + 1 : null))
    .filter((student) => student !== null);
}

console.log(solution([1, 2, 3, 4, 5])); */
