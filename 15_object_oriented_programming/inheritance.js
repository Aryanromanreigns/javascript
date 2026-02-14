class user {
    constructor(username){
        this.username =  username;
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user {
    constructor(username,email,password){
        super(username);
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`coursse is added by the ${this.username}`)
    }
}

const banda = new teacher('aryan','aryan@gmail.com',123);

banda.addcourse();



