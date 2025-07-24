const  mySym =  Symbol("key1")

const jsUser = {
    name: "Huzaifa",
    "full name": "Muhammad Huzaifa",
    [mySym]: "myKey1",
    age: 27,
    location: "Islamabad",
    email: "huzaifa@google.com",
    password: "password",
    isLoggedIn: false,
    lastLoggedInDays: ['Monday', 'Saturday']
}

// jsUser.email = "huzaifa@google.com";
// Object.freeze(jsUser);
// jsUser.email = "huzaifa@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);