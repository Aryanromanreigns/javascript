//for loop
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

for(let i =0; i<=10; i++){
    console.log(`outer loop: ${i}`);
    for(let j=0; j<=5; j++){
        console.log(`   inner loop: ${j}`);
    }
}

let arr = ['apple', 'banana', 'cherry'];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}

for(let i=0; i<=10; i++){
    if(i === 5){
        console.log("Skipping 5");
        break;
    }
    console.log(i);
}


for(let i=0; i<=10; i++){
    if(i === 5){
        console.log("Skipping 5");
        continue;
    }
    console.log(i);
}
