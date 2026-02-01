const name ="aryankumar";
const id = 12345;
console.log(`my name is ${name} and my id is ${id}`);


const Newname =new String("aryankumar");
console.log(Newname[0]);
console.log(Newname.__proto__);
console.log(Newname.length);
console.log(Newname.toUpperCase());
console.log(Newname.charAt(2));
console.log(Newname.indexOf("kumar"));
console.log(Newname.includes("aryan"));
console.log(Newname.startsWith("arya"));
console.log(Newname.endsWith("kumar"));
console.log(Newname.substring(0,5));
console.log(Newname.slice(-8,5));//yan

const newstr = "   hello world   ";
console.log(newstr);
console.log(newstr.trim());//hello world
console.log(newstr.replace("world","hi"));
console.log(newstr.split(" "));//[ '', '', '', 'hello', 'world', '', '', '' ]