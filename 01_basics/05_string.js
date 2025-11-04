
const name ="ritika";
const repoCount=50;
//console.log(name+ repoCount+" oh");
//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gmaeName=new String('ritika-2004-4th-december');
console.log(gmaeName[0]);
console.log(gmaeName.length);
console.log(gmaeName.toLocaleUpperCase());

const newString=gmaeName.substring(0,3);
console.log(newString);

const anotherString=gmaeName.slice(-6,2);
console.log(anotherString);

const url="https://ritikais%20hehe";
console.log(url.replace('%20','funny'));

console.log(url.includes('ritika'));

console.log(gmaeName.split('-'))
