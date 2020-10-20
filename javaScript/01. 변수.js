console.log('Hello:)\n');

// 한 줄 주석
/* 여러 줄 주석 */

/* 1 */
console.log("/* 1 */");
// 변수 선언 : var, let, const

/**
 *  변수 작성 규칙
 * 대문자, 소문자를 구분
 * 영문, 숫자, _, $의 조합으로만 가능(단, 숫자로 시작 불가)
 * 키워드를 변수로 선언 불가
 */

//  var로 변수를 선언할 경우 동일한 이름의 변수명을 사용할 수 있다 
var num;
num = 10;
num = 100;  
console.log(num)

//  let으로 변수를 선언할 경우 동일한 이름의 변수명을 사용할 수 없다 !! 
let num2 = 20;
// let num2 = 200; // 동일한 변수명 사용 불가능
console.log(num2)

//  const로 변수를 선언할 경우 메모리를 가지고 있지만 변경 불가능(상수) !! 
const num3 = 10;
// num3 = 20 // 변경 불가능
console.log(num3)


/* 2 */
console.log("\n/* 2 */");
// 기본 자료형 : 숫자, 문자, 논리, 객체
let nnum = 10;
let fnum = 3.14;
let b = true;
let svar = 'Hong gil dong';
let tm = new Date();

