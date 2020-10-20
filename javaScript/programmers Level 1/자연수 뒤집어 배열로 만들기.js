/* 문제 풀이 */
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((x) => Number(x));
}

/* 출력 확인 */
console.log(solution(12345), " >> return: [5,4,3,2,1]");
