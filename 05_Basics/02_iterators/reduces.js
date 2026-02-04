const mynums = [1,2,3,4,5,6,7,8,9];

const mytot = mynums.reduce(function (acc,currval)  {
    console.log(`acc ${acc} and current val is ${currval}`);
    return acc + currval;
},0);
// gnerally use in shoping cart

const arr = [
    {
        itemname:"mobile",
        price:55
    },
    {
        itemname:"usb",
        price:5
    },
    {
        itemname:"sticker",
        price:6
    },
]

const tot = arr.reduce( (acc , currval) => {
    return acc + currval.price
},0);
console.log(tot);
