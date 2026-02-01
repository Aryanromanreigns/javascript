if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(c); //30
console.log(a); //error
console.log(b); //error


function one(){
    const username = "aryan";

    function two(){
        const wenbsite =  "learncodeonline.in";
        console.log(username);
    }
    console.log(wenbsite); //error
    two();
}
one();


addOne(5);
function addOne(x){
    return x + 1;
}

addtwo(5);
const addtwo = function(x){
    return x + 2;
}
//error
