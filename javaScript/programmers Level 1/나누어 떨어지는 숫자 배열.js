/* 문제 풀이 */
function solution2(arr, divisor) {
  var answer = [];
  // 나누어 떨어지는 값 찾기
  for (var num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }
  // 오름차순 정렬
  if (answer.length !== 0) {
    answer.sort((a, b) => a - b);
    return answer;
  }
  // divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
  return [-1];
}

/* 다른 풀이 */
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

/* 출력 확인 */
console.log(solution([5, 9, 7, 10], 5), " >> return: [5, 10]");
console.log(solution([2, 36, 1, 3], 1), " >> return: [1, 2, 3, 36]");
console.log(solution([3, 2, 6], 10), " >> return: 	[-1]");
