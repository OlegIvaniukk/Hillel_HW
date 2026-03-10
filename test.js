//HW 10.2
let str = "Wonderful Joyful Happiness Time Task Apple";

console.log(str.match(/\b[^Aa\s]{6,}\b/g));

//HW 10.1
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var trusted = [];
var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;

for (var i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        trusted.push(arr[i].email);
    }
}

console.log(trusted);