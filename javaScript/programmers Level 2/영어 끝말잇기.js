/* 문제 풀이 */
function solution(n, words) {
  for (var i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      words.slice(0, i).includes(words[i])
    ) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}

/* 출력 확인 */
console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ]),
  " >> return: [3,3]"
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ]),
  " >> return: [0,0]"
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]),
  " >> return: [1,3]"
);
