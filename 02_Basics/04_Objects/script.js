const user = new Object();
console.log(user);
user.name = "Bob";
user.age = 25;
user.location = "Los Angeles";
console.log(user);


const regularUser = {
    email: "regularuser@example.com",
    fullname:{
        userfullname:{
            firstname:"aryan",
            lastname:"kumar"
        }
    }
}
console.log(regularUser.fullname);


console.log(regularUser.fullname.userfullname.firstname);

const object1 = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};
const object2 = {
    prop4: "value4",
    prop5: "value5"
};

const mergeObject = Object.assign({}, object1, object2);
console.log(mergeObject);
const mergeObject2 = {...object1, ...object2};
console.log(mergeObject2);


const arrObj = [
    {
        name: "aryan",
        age: 22
    },
    {
        name: "kumar",
        age: 23
    },
]
arrObj[0].name;
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));






const course = {
    coursename: "Javascript",
    price: 999,
    courseInstructor: "aryan kumar",
}

const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor: instructor} = course;
console.log(instructor);