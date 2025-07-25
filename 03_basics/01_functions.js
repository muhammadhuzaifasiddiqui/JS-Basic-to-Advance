const user = {
    username: "huzaifa",
    price: 200
}
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

handleObject({
    username : "Safwan",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))


// function calculateCartPrice(val, val2, ...num1){
//    /;atoutreturn num1
// }
// console.log(calculateCartPrice(200, 300, 400, 500))

// function loginusermessage(username =  "Ali"){
//     if(!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginusermessage("huzaifa"))
// console.log(loginusermessage())

// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     // console.log("huzaifa");
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(4, 7);
// console.log("Result: ", result);

// function sayMyName(){
//     console.log("H");
//     console.log("U");
//     console.log("Z");
//     console.log("A");
//     console.log("I");
//     console.log("F");
//     console.log("A");                        
// }
// console.log(sayMyName);
// function addTwoNumber(num1, num2 = 0){
//     console.log(num1 + num2);
// }
// const result = addTwoNumber(3, 5)
// console.log("Result: ", result):
// addTwoNumber(78+ 20);