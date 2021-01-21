/* 문제 출처 https://programmers.co.kr/learn/courses/30/lessons/42840 */

/* 문제 풀이 */
function solution(answers) {
  var answer = [];
  var score = []; // 각 학생의 점수를 담을 배열
  var supoja = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 각 학생이 맞힌 문제의 개수를 배열 score에 담는다
  for (var student of supoja) {
    score.push(
      answers.filter(
        (correct, index) => correct === student[index % student.length]
      ).length
    );
  }

  // 최고 점수를 구한다
  var max = Math.max.apply(null, score);

  // 가장 많은 문제를 맞힌 사람을 anser 배열에 담는다
  for (var i = 0; i < score.length; i++) {
    if (score[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}

/* 출력 확인 */
console.log(solution([1, 2, 3, 4, 5]), " >> return: [1]");
console.log(solution([1, 3, 2, 4, 2]) == [1, 2, 3], " >> return:[1,2,3]");
