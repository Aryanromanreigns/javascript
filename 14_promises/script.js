const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    },1000)


})

promiseone.then(function(){
    console.log('promise consumed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task two ')
        resolve()

    },1000)
}).then(function(){
    console.log('async two resolve')
})


const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"aryan",email:"aryan@example.com"})
    },1000)


})

promisethree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"aryan",password:"123"})
        }
        else{
            reject('error : something went wrong')
        }
        
    },1000)
})



promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('the promise is either rejected or resolve')
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('error js went wrong')
        }
        
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(promiseFive);
    }catch (error){
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUser(){
//     try{
//         const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await response.json()
//         console.log(data)

//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})


