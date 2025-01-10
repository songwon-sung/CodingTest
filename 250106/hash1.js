/* 해시_폰켓몬 */

/* 1차. 문제 풀이의 흐름만 작성가능능 */
/* function solution(nums) {
  let answer = 0;
  // 배열 nums를 오름차순 정렬하기
  // 배열 nums 중복값 제거한 배열 newNums 생성
  // nums.length/2 <= newNums.length 라면 nums.length/2
  // nums.length/2 > newNums.length 라면 newNums.length

  return answer;
} */

/* 2차. 해당 공식을 찾아가면서 풀이 */
/* function solution(nums) {
  let answer = 0;
  // 배열 nums를 오름차순 정렬하기
  const arrNums = nums.sort((a, b) => a - b);
  // 배열 nums 중복값 제거한 배열 newNums 생성
  let newNums = [];
  arrNums.forEach((num) => {
    if (!newNums.includes(num)) {
      newNums.push(num);
    }
  });
  // nums.length/2 <= newNums.length 라면 nums.length/2
  if (nums.length / 2 <= newNums.length) {
    answer = nums.length / 2;
  }
  // nums.length/2 > newNums.length 라면 newNums.length
  else answer = newNums.length;
  return answer;
}

const nums1 = [3, 1, 2, 3];
console.log(solution(nums1));
const nums2 = [3, 3, 3, 2, 2, 4];
console.log(solution(nums2));
const nums3 = [3, 3, 3, 2, 2, 2];
console.log(solution(nums3)); */
// 중복값 제거 방법에 대해 알지 못 함
// 굳이 오름차순 정렬할 필요 없을 듯 (내가 보기 편하려고 한 방법일 뿐)

/* 3차. 개선 된 방법 고민 */
function solution(nums) {
  const setNums = new Set(nums);
  const newNums = [...setNums];
  return nums.length / 2 > newNums.length ? newNums.length : nums.length / 2;
}

const nums1 = [3, 1, 2, 3];
console.log(solution(nums1));
const nums2 = [3, 3, 3, 2, 2, 4];
console.log(solution(nums2));
const nums3 = [3, 3, 3, 2, 2, 2];
console.log(solution(nums3));
