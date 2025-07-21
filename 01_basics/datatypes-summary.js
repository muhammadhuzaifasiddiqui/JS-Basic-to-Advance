// const score = 100
// const scoreValue = 100.3

// const isLoggedIn  = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol("123");
// const anothrerId = Symbol("123");

// console.log(id === anothrerId); // false, symbols are unique

// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// const heros = ["Thor", "Ironman", "Hulk"];
// let myObj = {
//     name: "Huzaifa",
//     age: 27,
// }

// const myFunction = function() {
//     console.log("Hellow World!");
// }

// console.log(typeof scoreValue);

// let myfacebookname = "Huzaifa"

// let anothername = myfacebookname
// console.log(anothername);

console.log("myYouTubeName");
console.log("anotherName");

let userOne = {
  email: "userone@gmail.com",
  upi: "userone@upi"
};

let userTwo = {
  email: "usertwo@gmail.com",
  upi: "usertwo@upi"
};

userTwo = userOne;

userTwo.email = "huzaifa@google.com"

console.log(userOne.email);
console.log(userTwo.email);