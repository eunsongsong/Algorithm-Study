// 조건문
// if문, switch문

let input = 40;
switch (true) {
    case input >= 90: console.log("A"); break;
    case input >= 80: console.log("B"); break;
    case input >= 70: console.log("C"); break;
    case input >= 60: console.log("D"); break;
    default: console.log("F"); break;
}

// swith문은 beak를 찾을 때까지 실행된다
let date = new Date();
console.log(date);
console.log(date.getMonth() + 1); // getMonth 0~11: 1~12월
switch (date.getMonth()) {
    case 12:
    case 1:
    case 2: console.log("겨울"); break;
    case 3:
    case 4:
    case 5: console.log("봄"); break;
    case 6:
    case 7:
    case 8: console.log("여름"); break;
    case 9:
    case 10:
    case 11: console.log("가을"); break;

}

// 삼항 조건 연산자
// 표현식 ? 참일때 실행문 : 거짓일때 실행문;
let d = 33;
console.log(2 % d == 0 ? '짝수' : '홀수');

let val1 = 20, val2 = 30, val3 = 10;

let max = val1 > val2 ? val1 : val2;
console.log(max);

let min = val1 < val2 ? (val1 < val3 ? val1 : val3) : (val2 < val3 ? val2 : val3);
console.log(min);


let noval;
noval = noval ? noval : 100;
noval = noval ? noval : 200;
console.log(noval + 10);

// 48 라인과 동일
if (!noval) {
    noval = 100;
}

noval = noval || 100;
console.log(noval + 10);