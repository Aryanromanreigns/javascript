// switch

switch(key){
    case 'value1':


        break;

    default:
        break;

    
}
const month = 3;

switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log('invalid month');
        break;
}



// falsy value------------
// false , 0, "", null, undefined, NaN,-0,BigInt(0n)

// truthy value-----------
// every thing in "" then this is truthy value
// [],{},function(){}

const emptyrObj = {};
if(Object.keys(emptyrObj).length === 0){
    console.log("Object is empty");
}


false == 0  // true
false === 0 // false
false == ""// true
0 == "" // true


// nuleshing coalescing operator (??)
let val ;
val = 5 ?? 10; // 5
val = null ?? 10; // 10
val = undefined ?? 10; // 10
val = 0 ?? 10; // 0
val = "" ?? "default"; // ""

// ternary operator
// conditon ? true : false

const age = 20;
age >= 5 ? console.log("are are above the age ") : console.log("you are below the age");

