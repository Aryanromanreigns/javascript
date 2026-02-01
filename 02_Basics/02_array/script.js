const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log(arr1.push(arr2));


const sumarr = [...arr1, ...arr2];
console.log(sumarr);


const faltuarr = [1, 2, [3, 4], [5, 6]];
const newfaltuarr = faltuarr.flat(Infinity);
console.log(newfaltuarr);


console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name: "aryan"}));//[]

let arr = 5;
let arrr = 55;
let arrrr = 555;
console.log(Array.of(arr, arrr, arrrr));

