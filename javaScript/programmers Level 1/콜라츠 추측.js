/* 문제 풀이 */
function solution(num) {
  var answer = 0;

  if (num === 1) return 0;

  for (var i = 0; i < 500; i++) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num *= 3;
      num += 1;
    }
    answer += 1;
    if (num === 1) return answer;
  }
  return -1;
}

/* 출력 확인 */
console.log(solution(6) === 8);
console.log(solution(16) === 4);
console.log(solution(626331) === -1);
console.log(solution(1) === 0);
