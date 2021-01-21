/* 문제 출처 https://programmers.co.kr/learn/courses/30/lessons/68644 */

/* 문제 풀이 */
function solution(numbers) {
  var answer = [];
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      var sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  console.log(answer);
  return answer;
}

/* 출력 확인 */
console.log(
  JSON.stringify(solution([2, 1, 3, 4, 1])) ===
    JSON.stringify([2, 3, 4, 5, 6, 7])
);
