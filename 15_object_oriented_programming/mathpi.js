console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI)


const descripter =Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);


const chai = {
    name:'ginger chai',
    price : 250,
    isavailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));



