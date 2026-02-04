const coding = ['java','python','cpp','javascript'];

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item)
});

function printme(cal){
    console.log(cal);
}

coding.forEach(printme);

coding.forEach( (item ,index,arr) => {
    console.log(item,index,arr);
})

const mycoding = [
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languagefilename);
})
// foreach loop do not return so we havve another function called filter

const mynum = [1,2,3,4,5,6,7,8,9];
const valfour = mynum.filter( (val) => {
    return val > 5;
})
console.log(valfour);


const newnum = [];
mynum.forEach( (item) => {
    if(item > 5){
        newnum.push(item);
    }
})

console.log(newnum);




const books = [
  {
    title: 'Book One',
    genre: 'Fiction',
    publish: 1981,
    edition: 2004
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publish: 1987,
    edition: 2010
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
];


let userbook = books.filter( (item) => item.genre === 'History')
console.log(userbook);

userbook.filter( (item) => {
    return item.edition >= 2000
})
console.log(userbook);




const mynums = [1,2,3,4,5,6,7,8,9];

const newn = mynums.map( (item) => {
    return item + 55;
})
console.log(newn);


const chaning = mynums.map( (item) => item +10).map( (item) => item + 1).filter( (item) => item > 55);
console.log(chaning);





