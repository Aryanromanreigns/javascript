const ary = Symbol("ary");
// object literal
const person = {
    name: "Alice",
    [ary]: "This is a symbol property",
    "full name": "Alice Johnson",
    age: 30,
    location: "New York",
    email:"alice@example.com",
    isLoogedin: true,
    lastLogin: ["2023-10-01", "2023-10-05", "2023-10-10"],
}
console.log(person);

// accessing object properties
console.log(person.name);
console.log(person["age"]);
console.log(person["full name"]);
console.log(person[ary]);


person.email = "ayannkumar@gmail.com";
console.log(person.email);
Object.freeze(person);
person.age = 35;
console.log(person.age);

person.greeting = function() {
    console.log("hello from javascript side");
}
person.greeting1 = function(){
    console.log(`hello my name is ${this.name}`);
}

console.log(person.greeting());
console.log(person.greeting1());
