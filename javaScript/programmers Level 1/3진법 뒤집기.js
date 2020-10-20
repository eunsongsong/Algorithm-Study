/* 문제 풀이 */
function solution(n) {
  var answer = 0;
  var sam = []; // 3진법을 담을 배열
  // n을 3진법으로
  while (n > 0) {
    sam.splice(0, 0, n % 3); // n을 3으로 나눈 나머지
    n = parseInt(n / 3);
  }
  // 3진법 상에서 앞뒤로 뒤집은 후, 다시 10진법으로
  for (var i in sam) {
    answer += sam[i] * Math.pow(3, i);
  }
  return answer;
}

/* 출력 확인 */
console.log(solution(45), " >> return: 7");
console.log(solution(125), " >> return: 229");
