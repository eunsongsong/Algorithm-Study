/* 문제 풀이 */
function solution(s) {
  if (s.length % 2 === 0) {
    // 문자열 s의 길이가 짝수일 때
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    // 문자열 s의 길이가 홀수일 때
    return s.charAt(parseInt(s.length / 2));
  }
}

/* 다른 풀이 */
function solution(s) {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.charAt(parseInt(s.length / 2));
}

/* 출력 확인 */
console.log(solution("abcde"), " >> return: c");
console.log(solution("qwer"), " >> return: we");
