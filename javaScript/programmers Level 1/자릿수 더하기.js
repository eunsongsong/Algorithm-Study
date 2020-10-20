/* 문제 풀이 */
function solution(n) {
  var answer = 0;
  var num = String(n)
    .split("")
    .map((n) => Number(n));
  for (var n of num) {
    answer += n;
  }
  return answer;
}

/* 출력 확인 */
console.log(solution(123) === 6);
console.log(solution(987) === 24);
