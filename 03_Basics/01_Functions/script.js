function sayMyName(){
    console.log("a");
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n");
}
sayMyName();

function sumTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
sumTwoNumbers(5, 10);


function sumTwoNumberss(num1, num2){
    return num1 + num2;
}
const num = sumTwoNumberss(5, 10);
console.log(num);


function loginUserName(username){
    if(!username){
        console.log("pleae enter a valid name");
        return;
    }
    return `welcome back ${username}`;

}
console.log(loginUserName("aryan"));



function loginUserName(username = "aryan"){
    if(!username){
        console.log("pleae enter a valid name");
        return;
    }
    return `welcome back ${username}`;

}
console.log(loginUserName());



function calCartPrice(...prices){
    return prices;
}
console.log(calCartPrice(20,30,40,50));//[20,30,40,50]


function calCartPrice(value1,value2,...prices){
    return prices;
}
console.log(calCartPrice(20,30,40,50));//[40,50]



const user ={
    username: "aryan",
    price:55
}
function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

handleObject({
    username:"aryan",
    price:55
})

console.log(handleObject);


const newArray = [1,2,3,4,5];

function returnSecondValue(arr){
    return arr[1];
}
console.log(returnSecondValue(newArray));



