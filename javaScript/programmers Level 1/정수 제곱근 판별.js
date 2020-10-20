/* 문제 풀이 */
function solution(n) {
  var x = Math.pow(n, 1 / 2);
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

/* 출력 확인 */
console.log(solution(121) === 144);
console.log(solution(3) === -1);
