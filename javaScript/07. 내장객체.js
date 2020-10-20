// 내장 객체
console.log(new Date().getFullYear);
console.log(new Date().getDate);
console.log(new Date().getDay);
console.log(new Date().getHours);
console.log(new Date().getTime);
console.log(new Date().getSeconds);
console.log(new Date().getUTCMinutes);

let now = new Date();
let before = new Date('December 9, 1991');
// 시간 간격 구하기
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval/(1000*60*60*24));
// 출력
console.log(`태어나고 ${interval}일 지남`);



let num = new Number(123);
console.log(typeof num);
console.log(num.toString());
let str = new String("string!!");
console.log(typeof str);
let vstr = 'i am a string';
console.log(typeof vstr);

// 내장 객체는 객체 취급 O
// 기본 자료형(int, char, string, ...)은 객체 취급 X
Number.prototype.myfunc = function() {}
// String.prototype.myfunc = function() {}

let fs = 'banana,orange,apple,kiwi';
// 문자열 쪼개기!!
let is = fs.split(',');
console.log(is);
for(let f of is){
    console.log(f);
}
// 대문자로!!
console.log(fs.toUpperCase());
console.log(fs.charAt(3));
console.log(fs.concat(',melon'));
console.log(fs);
console.log(fs.slice(7,13));
console.log(fs.substr(7,6));
console.log(fs.substring(7,13));
console.log(fs.indexOf('orange'));
console.log(fs.indexOf(',',7)); // 7번째 index 다음에 오는 ,
console.log(fs.indexOf(','),fs.length);
 
let string = '굿모닝, 좋은 아침!';
// 문자열 내부에 '아침'이라는 문자열이 있는지 확인
// indexOf는 찾는 값이 없을 경우 -1dmf flxjs
if(string.indexOf('아침') >= 0){
    console.log('하이');
}
// String 객체에 contain 함수 추가 및 활용
String.prototype.contain = function(input){
    return this.indexOf(input) > -1;
}
console.log(string.contain('저녁'));


