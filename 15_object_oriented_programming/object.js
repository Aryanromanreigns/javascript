function multiple5(num){
    return num*5;
}

multiple5.power = 2;

console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype)


function createuser(username , score){
    this.username = username;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}


const chai = new createuser("chai",65);
const code = new createuser("code",55);

chai.printme();



