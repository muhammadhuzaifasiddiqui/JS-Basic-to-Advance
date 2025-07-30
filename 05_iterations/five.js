const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function programminglanguage(item) {
//     console.log(item);
// };

// coding.forEach(programminglanguage);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        LanguageName: "JavaScript",
        LanguageFileName: "JS"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "Python",
        LanguageFileName: "py"
    },
    {
        LanguageName: "CPP",
        LanguageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.LanguageFileName);
});

myCoding.forEach((item, index) => {
    console.log(`Language Name: ${item.LanguageName}, File Name: ${item.LanguageFileName}, Index: ${index}`);
});