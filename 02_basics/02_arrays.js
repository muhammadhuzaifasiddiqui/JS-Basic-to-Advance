const sahaba_karam = ["Abu-Bakr-R.A","Umer-R.A","Usman-R.A","Ali-R.A"]
const ottoman_heros = ["Ertugrul","Fateh Sultan","Suleiman","Abdul Hamid"]
const seljuk_heros = ["Tugrul Baig","Alp Arslan","Malik Shah","Malik Sanjar"]
const historical_dates = [571, 1454, 1751, 1799]

console.log(Array.isArray("Uzair-R.A"));
console.log(Array.from("Uzair-R.A"));
console.log(Array.isArray({name: "uzair-R.A"}));

let score1 =100;
let score2 =200;
let score3 =300;
let score4 =400;

console.log(Array.of(score1, score2, score3, score4));


// console.log(Array.isArray("Hamza-R.A"));
// console.log(Array.from("Hamza-R.A"));

// console.log(Array.isArray("Hamza-R.A"));
// console.log(Array.isArray(sahaba_karam));
// console.log(Array.isArray(seljuk_heros));
// console.log(Array.isArray(ottoman_heros));
// console.log(Array.isArray(historical_dates));

// const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_newArr = newArr.flat(Infinity);
// console.log(real_newArr);

// const muslim_heros = [...sahaba_karam, ...historical_dates, ...ottoman_heros, ...seljuk_heros]
// console.log(muslim_heros);

// const muslim_heros = sahaba_karam.concat(ottoman_heros, seljuk_heros, historical_dates);
// sahaba_karam.concat(seljuk_heros);
// sahaba_karam.concat(historical_dates);
// console.log(muslim_heros);

// sahaba_karam.push(ottoman_heros);
// sahaba_karam.push(seljuk_heros);
// sahaba_karam.push(historical_dates)
// console.log(sahaba_karam[5][2]);