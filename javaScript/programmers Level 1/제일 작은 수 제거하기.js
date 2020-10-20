/* 문제 풀이 */
function solution(arr) {
  // 가장 작은 수를 제거한 배열이 빈 배열인 경우 배열에 -1을 채워 리턴
  if (arr.length === 1) {
    return [-1];
  }

  // 가장 작은 수를 배열에서 제거
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

/* 출력 확인 */
console.log(solution([4, 3, 2, 1]), " >> return: [4,3,2]");
console.log(solution([10]), " >> return: [-1]");
