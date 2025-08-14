// 1️⃣ Function Declaration
function greet(name) {
    console.log("Function Declaration => Hello, " + name);
  }
  greet("Hitesh");
  
  // 2️⃣ Function Expression
  const sayHi = function(name) {
    console.log("Function Expression => Hi, " + name);
  };
  sayHi("Ali");
  
  // 3️⃣ Arrow Function
  const welcome = (name) => {
    console.log(`Arrow Function => Welcome, ${name}`);
  };
  welcome("Sara");
  
  // 3.1️⃣ Arrow Function with Implicit Return (no curly braces)
  const square = num => num * num;
  console.log("Arrow Function (Implicit Return) => Square of 5 is:", square(5));
  
  // 4️⃣ Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("IIFE => This function runs immediately");
  })();
  
  // 5️⃣ Function Returning Another Function (Higher-Order Function)
  function outerFunction() {
    console.log("Higher-Order Function => Outer function called");
    return function() {
      console.log("Higher-Order Function => Inner function called");
    };
  }
  const inner = outerFunction();
  inner();
  
  // 6️⃣ Callback Function Example
  function processUserInput(callback) {
    const name = "Shreya";
    callback(name);
  }
  processUserInput(function(name) {
    console.log("Callback => Hello, " + name);
  });
  