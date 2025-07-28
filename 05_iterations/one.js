// for 
// for (let i = 1; i < 11; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("Element is 5");
//     }
//     console.log(element)
// }


// nested for loop
// for (let i = 0; i <=10 ; i++) {
//     // console.log(`outer loop ${i}`);
//     for (let j = i; j <=i; j++) {
//     console.log(`inner loop ${j} outer loop ${i}`);        
//     }
// }


// 2 table by using nexted foor loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Onter Loop Value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i+'*'+j+'='+i*j);        
//     }
// }


// let superHeros = ["flash", "Batman", "Superman"]
// console.log(superHeros.length);


// for (let i = 0; i <=superHeros.length; i++) {
//     const element = superHeros[i];
//     console.log(element);
// }

for (let i = 1; i <=20 ; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value  of i is ${i}`); 
}


