// const todays_date = new Date();
// const year = todays_date.getFullYear();
// const month = todays_date.getMonth() + 1;
// const date = todays_date.getDate(); // 날짜
// const day = todays_date.getDay(); // 요일
// const today = year + "-" + month + "-" + date;

// const a = new Date("2020-10-22");
// // console.log("날짜!!", todays_date, a);
// const b = a - todays_date;
// console.log(typeof b);

// console.log(today, "2020-11-01" >= today);

let array = [
  { a: 1, b: "2", c: 3 },
  { a: 1, b: "2", c: 3 },
  { a: 1, b: "3", c: 3 },
  { a: 1, b: "3", c: 3 },
  { a: 1, b: "2", c: 3 },
];
let arr = array.filter((item) => item.b > 1).sort((a, b) => a.b - b.b);
console.log(arr);

let arr3 = [];
arr.map((item) => {
  if (!arr3.includes(item.b)) {
    arr3.push(item.b);
  }
});
console.log("arr3", arr3);

const arr2 = arr3.map((item) => []);
console.log("arr2", arr2);

arr.map((item) => arr2[arr3.indexOf(item.b)].push(item));
console.log(arr2);
