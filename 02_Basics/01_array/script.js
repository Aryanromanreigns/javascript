const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

const arr2 =["aryan","kumar","gupta"];

const narr = new Array("aryan","kumar","gupta");
console.log(narr);

//array methods
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);


arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(4));

const newarr = arr.join();
console.log(newarr);
console.log(arr);
console.log(typeof newarr);

//slice , splice
const slicearr = arr.slice(1,4);
console.log(slicearr);
console.log(arr);
const splicearr = arr.splice(1,2);
console.log(splicearr);
console.log(arr);

