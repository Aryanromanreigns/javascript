function setusername(username){
    this.username = username;
}

function createusername(username,email,password){
    setusername.call(this,username);
    this.email = email;
    this.password = password;
}

const aryan = new createusername('aryan','aryan@gmail.com',123);
console.log(aryan)

