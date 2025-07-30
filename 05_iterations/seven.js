// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map((num) => {return num + 10})
// console.log("Numbers after adding 10:", newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers
.map((num) => 10*num)
.map((num) => num + 2)
.filter((num) => num > 60);

console.log("Numbers after multiplying by 10:", newNums);