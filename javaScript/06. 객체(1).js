// 객체
// 객체에 포함된 함수: 메소드/멤버
// 객체에 포함된 변수: 속성

let account = {
    id: 100,
    name: "hong",
    balance: 100000,
    print: function () {
        console.log(`계좌:${this.id}, 이름:${this.name}, 잔액:${this.balance}`);
    }
};
account.print();
// 객체 속성에 접근하는 방법: 객체.변수 또는 객체[변수]
console.log(`계좌:${account.id}, 이름:${account.name}, 잔액:${account.balance}`)
console.log(`계좌:${account['id']}, 이름:${account['name']}, 잔액:${account['balance']}`)



let person = {
    name: "홍길동",
    age: 23,
    info() {
        console.log(`이름:${this.name}, 나이${this.age}`);
    }
};
person.info();
//이름: 홍길도, 나이:23

// 객체 속성 값을 객체 밖에서 바꿀 수 있다
person.name = '김길동';
person.age = 25;
person.info();



// 배열 객체
let pers = [{name:'hong', age:'22'}, {name:'kim', age:'35'}];

let info = function(p) {
    console.log(`이름:${p.name}, 나이:${p.age}`);
}

for(let per of pers) {
    info(per);
}



// 생성자 함수
function Fruit(name, price) {
    this.name = name;
    this.price = price;
}
// 메소드 추가
Fruit.prototype.info = function() {
    console.log(`과일명:${this.name}, 가격:${this.price}`);
}
let frs = [new Fruit('사과', 1000), new Fruit('바나나', 2000)];
for(let f of frs){
    f.info();
}
















