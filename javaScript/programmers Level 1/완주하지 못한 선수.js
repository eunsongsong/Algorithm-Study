/* 문제 출처 https://programmers.co.kr/learn/courses/30/lessons/42576 */

/* 시간 초과 */
function solution2(participant, completion) {
  var answer = "";
  for (var c of completion) {
    participant.splice(participant.indexOf(c), 1);
  }
  answer = participant[0];
  return answer;
}

/* 문제 풀이 */
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  var i = 0;
  for (i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
  return participant[i];
}

/* 출력 확인 */
console.log(
  solution(["leo", "kiki", "eden"], ["eden", "kiki"]),
  ' >> return: "leo"'
);
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  ),
  ' >> return: "vinko"'
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]),
  ' >> return: "mislav"'
);
