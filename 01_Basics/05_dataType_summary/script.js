//premetive data types
//seven premetive data types in javascript
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint

//non-premetive data type
//8. object
//9. function
//10. array


//non premetive data types are generally objects




// javascript is a dynamically typed language
// we dont need to specify data type of variable
// javascript automatically assign data type based on value assigned


const id = Symbol("12345");
const newid = Symbol("12345");

console.log(id === newid); // false


//arry
let arr =[1,2,3,4,5];
console.log(typeof arr);//object

//object
let obj = {
    name: "aryan",
    id: 12345,
    isAdmin: false
}
console.log(typeof obj);//object
//function
const myfunc = function(){
    console.log("hello world");
}




//--------------------MEMORY ALLOCATION--------------------
//STACK MEMORY
//HEAP MEMORY
//PRIMETIVE DATA TYPES ARE STORED IN STACK MEMORY
//NON-PRIMETIVE DATA TYPES ARE STORED IN HEAP MEMORY

//example
let a = 10;
let b = a; // copy value of a to b
b++;
console.log(a); //10
console.log(b); //11

let obj1 = {
    name: "aryan",
    age: 23
};
let obj2 = obj1; // copy reference of obj1 to obj2
obj2.age = 24;
console.log(obj1.age); //24
console.log(obj2.age); //24