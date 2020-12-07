// const temp = [{ a: "1" }, { a: "2" }, { a: "3" }];
// // console.log(tempp.reduce((sum, current) => sum.a + current, 0) / tempp.length);
// // console.log(tempp.reduce((sum, b) => sum + b.a, 0));

// const answer = temp.reduce((acc, cur) => {
//   acc[cur[a]] += cur[a];
//   return acc;
// }, {});

// console.log(answer);

let arr = [
  {
    STATUS: "ACTIVE",
    AMOUNT: 200,
    PENDING: 100,
  },
  {
    STATUS: "NOTACTIVE",
    AMOUNT: 100,
    PENDING: 30,
  },
  {
    STATUS: "NOTACTIVE",
    AMOUNT: 150,
    PENDING: 10,
  },
];
// let output = arr.reduce((op, cur) => {
//   if (op[cur["STATUS"]]) {
//     op[cur["STATUS"]]["TOTAL_AMOUNT"] += cur["AMOUNT"];
//     op[cur["STATUS"]]["TOTAL_PENDING"] += cur["PENDING"];
//     op[cur["STATUS"]]["COUNT"]++;
//   } else {
//     op[cur["STATUS"]] = {
//       COUNT: 1,
//       TOTAL_AMOUNT: cur["AMOUNT"],
//       TOTAL_PENDING: cur["PENDING"],
//     };
//   }
//   return op;
// }, {});

let output = arr.reduce((sum, cur) => {
  console.log(">>", sum["AMOUNT"], cur["AMOUNT"]);
  sum["AMOUNT"] += cur["AMOUNT"];
  return sum;
});
console.log(output.AMOUNT);

const arr2 = [{ a: 1 }, { a: 2 }];
let b = arr2.map((item, index) => {
  if (item.a === 1) {
    return index;
  } else {
    return 11;
  }
});
console.log(b);

var arr3 = [{ name: "foo" }, { name: "bar" }];
let idx = arr3.findIndex((item) => {
  return item.name === "bar";
});
console.log(idx);

const bb = [1, 2, 3];
console.log(bb.slice(0, 1));
