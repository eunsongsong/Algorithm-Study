/* 문제 풀이 */
function solution(arr) {
  var answer = arr.filter((a, index) => {
    return a !== arr[index + 1];
  });
  return answer;
}

/* 다른 풀이 */
function solution(arr) {
  return arr.filter((a, index) => a !== arr[index + 1]);
}

/* 출력 확인 */
console.log(solution([1, 1, 3, 3, 0, 1, 1]), " >> return: [1,3,0,1]");
console.log(solution([4, 4, 4, 3, 3]), " >> return: [4,3]");
