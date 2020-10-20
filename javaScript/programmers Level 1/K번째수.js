/* array 정렬하기 */
arr = [4, 3, 2, 1];
console.log(
  arr.sort((a, b) => {
    a - b;
  })
);

/* 문제 풀이 */
function solution(array, commands) {
  var answer = [];
  for (var c of commands) {
    answer.push(array.slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1]);
  }
  return answer;
}

/* 출력 확인 */
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )," >> return: [5, 6, 3]"
);


