const score = 55;
console.log(score);

const newscore = new Number(55);
console.log(newscore);

console.log(newscore.toString());;
console.log(newscore.toFixed(2)); //55.00

const num = 55.56789;
console.log(num.toPrecision(4)); //55.57


const hundred = 10000000;
console.log(hundred.toLocaleString("en-IN")); //1,00,00,000

Max_value = Number.MAX_VALUE;
Min_value = Number.MIN_VALUE;
console.log(Max_value);//Max value: 1.7976931348623157e+308
console.log(Min_value);//Min value: 5e-324



//---------------------MATHS OBJECT--------------------
console.log(Math);
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.abs(-10)); //10
console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); //4
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(1,2,3,4,5,-1,0)); //-1
console.log(Math.max(1,2,3,4,5,-1,0)); //5
console.log(Math.pow(2,3)); //8
console.log(Math.sqrt(16)); //4
console.log(Math.random()); //random number between 0 and 1
console.log(Math.floor(Math.random()*10)); //random number between 0 and 9
console.log(Math.floor(Math.random()*10)+1); //random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1)) + min); //random number between 10 and 20