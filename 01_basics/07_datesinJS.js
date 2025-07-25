// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 2);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2025, 0, 2, 6, 50);
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-02-2025")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);
console.log(newDate.getTime());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday : "long",
    timeZone : 'Asia/Kolkata',
})