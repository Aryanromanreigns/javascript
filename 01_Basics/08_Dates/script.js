let mydate = new Date();
console.log(mydate);
console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let newdate = new Date("2023 , 0, 12");
console.log(newdate.toDateString());
let anotherdate = new Date(2023, 0, 12, 10, 33, 30, 0);
console.log(anotherdate.toLocaleString());


let date1 = new Date("2026-3-12");
console.log(date1.toDateString());

let date2 = new Date("13-04-2025");
console.log(date2.toLocaleDateString());
let date3 = new Date("April 13 2025");
console.log(date3.toDateString());
console.log(date3.getTime());


let mytimeStramp = new Date().now();
console.log(mytimeStramp);

console.log(Math.floor(Date.now()/1000));

let newdate2 = new Date();
console.log(newdate2.getMonth());
console.log(newdate2.getDate());
console.log(newdate2.getFullYear());
console.log(newdate2.getHours());


