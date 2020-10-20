// 배열

// 배열 선언
let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

// 배열의 요소를 꺼낸다
let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);

// 배열에 요소를 넣는다
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(array);



// 배열 정렬
let arr = [5, 7, 2, 4, 6];
arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
});
console.log("정렬 >> ",arr);


// 객체 내부의 숫자로 정렬하고 출력
array.sort((itemA, itemB) => {
    return itemA.price - itemB.price;
});
console.log('- 객체 내부의 숫자로 정렬');
console.log(array);
console.log();
// 객체 내부의 문자열로 정렬하고 출력
array.sort((itemA, itemB) => {
    if (itemA.name < itemB.name) {
        return -1;
    }
    else if (itemA.name > itemB.name) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log('- 객체 내부의 문자열로 정렬');
console.log(array);



let arr2 = [1, 2, 3, 4, 5];
// concat()
let totarr = arr2.concat([6, 7, 8]);
console.log(arr2);
console.log(totarr);

//reverse()
arr2.reverse();
console.log(arr2);

// splice()
/*
 * 첫 번째 인수는 새로운 요소가 삽입될 위치의 인덱스이며, 
 * 두 번째 인수는 제거할 요소의 개수이다.
 * 그 이후의 인수들은 모두 배열 요소로서 지정된 인덱스부터 차례대로 삽입된다.
 */
let num = arr2.splice(4, 1, 100);
console.log(num);
console.log(arr2);

console.log(typeof arr2);
let sarr = arr.join();
console.log(sarr);
console.log(typeof sarr);


let arr3 = [54, 34, 67, 78, 3, 47];
// forEach() 메소드
/* forEach() 메소드는 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한다. */
console.log('===forEach()메소드===');
let tot = 0;
arr3.forEach((item, index) => {
    // 
    tot += item;
});
console.log(tot);


// map() 메소드
console.log();
console.log('===map()메소드===');
let outputA = arr3.map((item, index) => {
    // 배열의 모든 요소를 제곱하여 새로운 배열을 만든다.
    return item * item
});
console.log(outputA);


// filter() 메소드
console.log();
console.log('===map()메소드===');
let outputB = arr3.filter((item, index) => {
    //짝수만 
    return item % 2 == 0;
});
console.log(outputB);






