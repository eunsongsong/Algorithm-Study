// 함수(fuction)

function greet() {
    console.log("Hi");
}
greet();


function add(x, y) {
    return x + y;
}
var s = add(1, 2);
console.log(s);


var func = function () {
    console.log('나도 함수');
}
func();


function outerFunc(fn) {
    fn();
}
outerFunc(func);


// 일회성 함수
outerFunc(function () {
    console.log('즉석함수');
})


function ff() {
    return 100;
}
var f1 = ff; // 함수 자체
var f2 = ff(); // 함수를 호출한 결과값
console.log(f1);
console.log(f1());
console.log(f2);



// 버블정렬
/**길이가 5인 배열을 버블정렬
 * 인덱스 0~4까지 원소를 두 개씩 비교하여 정렬한다
 * 인덱스 0~3까지 원소를 두 개씩 비교하여 정렬한다
 * 인덱스 0~2까지 원소를 두 개씩 비교하여 정렬한다
 * 인덱스 0~1까지 원소를 두 개씩 비교하여 정렬한다
 */
var data = [7, 8, 2, 5, 4]
function bubble_sort(com) {
    for (var k = data.length - 1; k >= 0; k--) {
        for (var i = 1; i <= k; i++) {
            // 오름차순, 내림차순을 쉽게 변경하기 위해 조건식을 함수로!!
            if (com(data[i - 1], data[i])) {
                var temp = data[i - 1];
                data[i - 1] = data[i];
                data[i] = temp;
            }
        }
    }
}

// 오름차순
// 함수를 변수로! 비교하는 함수를 따로 만듬
function compare(x, y) {
    if (x > y) return true;
    else return false;
}
bubble_sort(compare);
console.log(data);

// 내림차순
// 일회성 함수로 바로 
bubble_sort(function (x, y) {
    if (x < y) return true;
    return false;
});
console.log(data);



function f(x, y) {
    // 매개변수가 초기화되지 않았을 경우 초기화 해주는 방법
    x = x || 0;
    if (!y) {
        y = 0;
    }

    // 출력
    console.log(`x:${x}, y:${y}`);
}
f(10, 20);
// 함수를 호출할 때 매개변수가 초기화 되어있지 않음
f(100);
f();



var val = "55.5";
console.log(Number(val));
// parseInt: 정수로 변환
val2 = parseInt(val);
console.log(typeof(val2), val2);
// parseFloat: 소수형으로 
var val3 = parseFloat(val)
console.log(typeof(val3), val3)

var val4 = "55A";
console.log(Number(val4)); // NaN
console.log(parseInt(val4)); // 55



// // Time
// setTimeout(function() {
//     console.log('1s 지남');
// }, 1000); // 1초 후에 실행, 1000이 1초

// setInterval(function() {
//     console.log('Interval func')
// }, 1000); // 1초 마다 무한 반복으로 실행

// let id = setInterval(function() {
//     console.log("1초 마다 출력")
// }, 1000);
// setTimeout(function() {
//     clearInterval(id);
// }, 3000); //Timeout과 Interval이 실행되는 시점이 다르기 때문에 2번만 출력됨


// 화살표 함수
let af = () => console.log("arrow Function");
af();
// setTimout 함수를 화살표 함수를 사용하여 출력
// setTimeout(()=>{clearInterval(id)}, 3100);



// 함수 정의 후 바로 호출
((x,y)=>console.log(x+y))(10,20);






