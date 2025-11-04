const myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2025,10,4);//month starts with 0-11
//console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());//mili sec
console.log((Math.floor(Date.now()/1000)));


//date is a object in js