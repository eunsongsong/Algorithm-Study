Math.pow(n의, m승);
배열.splice(인덱스부터, n개 삭제, m값 삽입);
parseInt(1.1); // 정수로!!
Number.isInteger(숫자) // 정수 판별
배열.filter((a, index) => a !== arr[index + 1]);
배열.sort((a, b) => a - b); // 오름차순 정렬
배열.forEach(num => student[num-1] -= 1);
배열.includes(원소); // true/false
Math.abs(-1) //절대값
Math.max(...배열) // 최댓값
배열.join("") // 배열 원소 문자열로
문자열.split("") // 문자열 배열로 쪼개기
문자열.toUpperCase() // 문자로
문자열.trim() // 문자열 공백 제거
문자열.replace("1", "0") // 첫 번째 하나만 바꿈
문자열.charCodeAt(인덱스) // 아스키코드로
String.fromCharCode(b) // 아스키코드를 문자열로

// reduce
// 배열 원소의 합
var a = [1, 2, 3];
console.log(a.reduce((a, b) => a + b));

