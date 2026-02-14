const { use } = require("react");

class user {
    constructor(username){
        this.username =  username;
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
    static createid(){
        return `123`
    }
}

const aryan = new use('aryan')
console.log(aryan.createid())


