const user = {
    name: "aryan",
    age: 22,
    welcomeMessage: function(){
        console.log(`welcome back ${this.name}`);
    }

}
user.welcomeMessage();
user.name = "kumar";
user.welcomeMessage();

const chai = function(){
    let username = "aryan";
    console.log(this.username);//undefined
    console.log(this);//window object
}
chai();

const chai3 = () => {
    let username = "aryan";
    console.log(this.username);//aryan
    console.log(this);//window object
} 
chai3();


const addtwonumber = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwonumber(5, 10));
const addtwonumberr = (num1, num2) =>  num1 + num2;
const fun = () => ({username: "aryan"});
console.log(addtwonumberr(5, 10));
console.log(fun());


