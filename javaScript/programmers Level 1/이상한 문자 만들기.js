/* 문제 풀이 */
function solution(s) {
  var answer = "";
  var words = s.split(" "); // 문자열을 단어 단위로 쪼갠다
  for (var word of words) {
    for (var i in word) {
      answer +=
        i % 2 === 0
          ? word.charAt(i).toUpperCase()
          : word.charAt(i).toLowerCase();
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}

/* 출력 확인 */
console.log(
  solution("aa aaaa aa aa aaaaa aaa aa aaaaaa aaaaaaaaaaa aaaaaaaaa")
);
console.log(solution("try hello world") === "TrY HeLlO WoRlD");
