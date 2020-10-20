// 반복문

// for문으로 합
var sum = 0, even = 0, odd = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 2 == 0) {
        even += i;
    }
    else {
        odd += i;
    }
    sum += i;
}
console.log(("odd: " + odd) + (", even: " + even) + (", sum: " + sum));




// while문으로 합 
var sum = 0, even = 0, odd = 0;
var i = 0;
while (i < 1000) {
    if (i % 2 == 0) {
        even += i;
    }
    else {
        odd += i;
    }
    sum += i;
    i += 1;
}
console.log(("odd: " + odd) + (", even: " + even) + (", sum: " + sum));


// 배열 합
var arry = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arry.length; i++) {
    sum += arry[i];
}
console.log(sum);

// 배열 거꾸로 출력
for (var i = arry.length; i > -1; i--) {
    console.log(arry[i]);
}


/***** 배열을 활용한 for문 *****/
var arry = ['apple', 'banana', 'orange']
// in을 사용하면 배열의 인덱스!!
for (var i in arry) {
    console.log(i, arry[i]);
}
// of를 사용하면 배열의 값!!
for (var i of arry) {
    console.log(i);
}


// 중첩 반목문
// 별 찍기 1
/*
*
**
***
****
*****
*/
var cnt = 5;
for (var i=1; i<=cnt; i++) {
    var stars = ''
    for(var j=1; j<=i; j++){
        stars+='*'
    }
    console.log(stars);
}
// 별 찍기 2
var stars = ''
for (var i=1; i<=cnt; i++) {
    for(var j=1; j<=i; j++){
        stars+='*'
    }
    stars += '\n'
}
console.log(stars);

// 별 찍기 3
/*
*****
****
***
**
*
*/
var cnt = 5;
for (var i=1; i<=cnt; i++) {
    var stars = ''
    for(var j=cnt; j>=i; j--){
        stars+='*'
    }
    console.log(stars);
}

// 별 찍기 4
/*
    *
   **
  ***
 ****
*****
*/
var cnt = 5;
for (var i=1; i<=cnt; i++) {
    var stars = ''
    for(var j=cnt; j>i; j--){
        stars+=' '
    }
    for(var j=1; j<=i; j++){
        stars+='*'
    }
    console.log(stars);
}

// 별 찍기 5 - 다이아
/*
  *
 ***
*****
 ***
  *
*/
var cnt = 5;
for (var i=1; i<=cnt; i++) {
    if(i<=cnt/2){
        var stars = ''
        for(var j = cnt/2; j>=i; j--){
            stars+=' '
        }
        for(var j=1; j<=cnt-(j*2-1); j--){
            // console.log('@'+j*2-1);
            stars+='*'
        }
        console.log(stars);
    }
}




// 구구단
var i, j;
dan = ''
for (i = 2; i <= 9; i++) {
    for (j = 2; j <= 9; j++) {
        dan += `${j}X${i}=${j*i} \t`
    }
    dan += '\n'
}
console.log(dan);


// 1~100까지 차례로 더함
// 합이 50보다 크면 종료
var sum = 0;
for(var i=1;i<=100;i++){
    sum+=i;
    if(sum>=50){
        console.log(`${i}:${sum}`);
        break
    }
}

// 1~100까지 짝수의 합
var sum = 0;
for(var i=1; i<=100; i++) {
    if(i%2==1) continue; // continue 이후 문장을 실행하지 않고, 반복문의 조건으로 돌아감
    sum += i;
}
console.log(sum);






