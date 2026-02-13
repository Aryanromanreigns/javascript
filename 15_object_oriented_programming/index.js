const { useContext } = require("react");

const user = {
    username:"aryan",
    loginCount:8,
    issignedin:true,

    getuserdetails : function(){
        console.log(`username :${this.username}`)
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getuserdetails())


function User(username , usercount ,islogin){
    this.username = username;
    this.usercount = usercount;
    this.islogin = islogin

    this.greating = function(){
        console.log(`welcoe ${this.username}`)
    }

    return this;
}


const userone =new User("aryan",12,true);
const usertwo =new User("kumar",55,false);
console.log(userone);

//if we not use the new key word then it will overwrite the thing 

