/* 문제 풀이 */
function solution(arr1, arr2) {
  var answer = [];
  for (var i in arr1) {
    answer.push([]);
    for (var j in arr1[i]) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

/* 출력 확인 */
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  ),
  " >> return: [[4,6],[7,9]]"
);
