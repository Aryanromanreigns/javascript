//here we learn we can maket the builtin function 

let myheros = ['thor','spiderman']
let heropower = {
    thor :"hammer",
    spiderman: 'sling',

    getspiderpower: function(){
        console.log(`get spide power is ${this.spiderman}`)
    }

}
Object.prototype.aryan = function(){
    console.log(`aryan is present here`);
}

heropower.aryan();
myheros.aryan();

// if we make the funtion in array then it will only use for the aray not the object because we crated in base not in object and if we create it in object and if array is passs with the object then it will can use the property so 


// inheritence
const teacher ={
    makevideo : true
}

const teachingsuppoet = {
    isavailable : false
}

const tasupport = {
    makeassigment : 'ja assigment',
    fulltime : true,
    __proto__ : teachingsuppoet // then it can acces all the property
}
//modern syntax
Object.setPrototypeOf(teachingsuppoet,teacher);

let anothername = "iloveyou";

Object.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`);
}

anothername.truelength()