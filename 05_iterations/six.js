// const coding = ["JS", "RB", "Java", "Python", "CPP"];
// const values = coding.forEach( (val) => {
//     console.log(val);
//     return val; // Note: forEach does not return values, this is just for demonstration
// })
// console.log("Values returned by forEach:", values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {
//     return num > 4; // This will filter numbers greater than 4
// })
// console.log("Filtered numbers greater than 4:", newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num); // This will push numbers greater than 4 into newNums
//     }
// })
// console.log("Filtered numbers greater than 4 using forEach:", newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter( (bk) => bk.genre === 'Science' && bk.publish >= 2000);
  console.log(userbooks);
//   userbooks = books.filter( (bk) => { return bk.publish >= 2000})
  
//   console.log(userbooks);