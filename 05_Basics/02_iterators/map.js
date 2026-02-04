// map
const map = new map()
map.set('in','india');
map.set('us','united states of america');
console.log(map);

for (const [key,value] of map) {
    console.log(key,value);    
}

const mapp ={
    "num":"55",
    "numm":"555"
}
for (const [key,value] of mapp) {
    console.log(key,value);//problem
    
}

for (const key in object) {
   console.log(`${key} and value ${object[key]}`);
    
}



