/* 문제 출처 https://programmers.co.kr/learn/courses/30/lessons/64061 */

/* 문제 풀이 */
function solution(board, moves) {
  var answer = 0;
  var basket = [];
  for (var m of moves) {
    for (var row of board) {
      if (row[m - 1] !== 0) {
        // 인형을 뽑아서 바구니에 담는다.
        basket.push(row[m - 1]);
        row[m - 1] = 0;

        // 바구니에 인형이 2개 이상 들어있고,
        // 인형 두 개가 연속해서 쌓이면 두 인형을 터뜨린다.
        if (
          basket.length >= 2 &&
          basket[basket.length - 1] === basket[basket.length - 2]
        ) {
          basket.pop();
          basket.pop();
          answer += 2;
        }
        break;
      }
    }
  }
  return answer;
}

/* 출력 확인 */
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  ),
  " >> return: 4"
);
