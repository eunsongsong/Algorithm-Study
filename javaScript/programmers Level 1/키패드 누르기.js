/* 문제 풀이 */
function solution(numbers, hand) {
  var answer = "";
  var position = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ]; // 키패드 모양을 담은 리스트
  var left = [0, 3]; // 왼손의 위치
  var right = [2, 3]; // 오른손의 위치

  for (var n of numbers) {
    if (position[0].includes(n)) {
      // 왼손으로
      answer += "L";
      left = [0, position[0].indexOf(n)];
    } else if (position[2].includes(n)) {
      // 오른손으로
      answer += "R";
      right = [2, position[2].indexOf(n)];
    } else {
      // 더 가까운 손으로
      var positionN = [1, position[1].indexOf(n)]; // 현재 눌러야 하는 키의 위치
      var distanceL =
        Math.abs(left[0] - positionN[0]) + Math.abs(left[1] - positionN[1]);
      var distanceR =
        Math.abs(right[0] - positionN[0]) + Math.abs(right[1] - positionN[1]);
      if (distanceL < distanceR) {
        // 왼손과 더 가까우면
        answer += "L";
        left = positionN;
      } else if (distanceR < distanceL) {
        // 오른손과 더 가까우면
        answer += "R";
        right = positionN;
      } else {
        // 왼솜/오른손 거리가 같으면
        if (hand === "left") {
          answer += "L";
          left = positionN;
        } else {
          answer += "R";
          right = positionN;
        }
      }
    }
  }

  return answer;
}

/* 출력 확인 */
console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL"
);
console.log(
  solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left") === "LRLLRRLLLRR"
);
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right") === "LLRLLRLLRL");
