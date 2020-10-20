/* 문제 풀이 */
function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

/* 출력 확인 */
console.log(solution(118372) === 873211);
