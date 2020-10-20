/* 문제 풀이 */
function solution(n, lost, reserve) {
  var answer = n;
  var student = [];
  // 학생들이 가지고 있는 체육복의 개수를 나타내는 student 배열
  for (var i = 0; i < n; i++) {
    student[i] = 1;
  }
  lost.forEach((num) => (student[num - 1] -= 1));
  reserve.forEach((num) => (student[num - 1] += 1));
  // 체육복을 빌려주는 반복문
  for (var i = 1; i < n; i++) {
    if (student[i] === 2 && student[i - 1] === 0) {
      student[i] = -1;
      student[i - 1] += 1;
    } else if (student[i] === 0 && student[i - 1] === 2) {
      student[i] = +1;
      student[i - 1] -= 1;
    }
  }
  // 체육 수업을 들을 수 있는 학생
  for (var s of student) {
    if (s === 0) {
      answer -= 1;
    }
  }
  return answer;
}

/* 출력 확인 */
console.log(solution(5, [2, 4], [1, 3, 5]), " >> return: 5");
