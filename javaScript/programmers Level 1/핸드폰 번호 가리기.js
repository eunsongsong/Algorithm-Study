/* 문제 풀이 */
function solution(phone_number) {
  var answer = "";
  var len = phone_number.length; // 전화번호 길이
  // 전화번호 뒷 4자리 제외하고 *으로 가리기
  for (var i = 0; i < len - 4; i++) {
    answer += "*";
  }
  answer += phone_number.slice(len - 4, len); // 전화번호 뒷 4자리
  return answer;
}

/* 출력 확인 */
console.log(solution("01033334444") === "*******4444");
console.log(solution("027778888") === "*****8888");
