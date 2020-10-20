/* 문제 풀이 */
function solution(a, b) {
  var answer = 0;

  // 작은 수를 a, 큰 수를 b로 바꿈
  if (a > b) {
    var temp = a;
    a = b;
    b = temp;
  }

  // a와 b 사이의 합 구하기
  for (var i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}

/* 출력 확인 */
console.log(solution(3, 5), " >> return: 12");
console.log(solution(3, 3), " >> return: 3");
console.log(solution(5, 3), " >> return: 12");
