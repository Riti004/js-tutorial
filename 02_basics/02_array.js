const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);//it creats array inside array and makes dc_heros as fourth element inside marvel_heros;
// console.log(marvel_heros)//=[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_hero=marvel_heros.concat(dc_heros);
// console.log(all_hero);//=>[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spreed an array inside another (method 2)
// const all_new_hero=[...marvel_heros,...dc_heros];
// console.log(all_new_hero)//=>[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//method 3

// const another_arr=[1,2,3,[4,5],[6,7,[8,9]],10];
// const real_another_arr=another_arr.flat(Infinity);
// console.log(real_another_arr);//=>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray("ritkaa"));//checks if the given value is an array
console.log(Array.from("1234"))//forms the value into array

//INTARESTING CASE FOR INTERVIEW**

console.log(Array.from({name:"1234"}));//=>[] //as it can not decide weater to make array of the key or the value 

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//=>[ 100, 200, 300 ]

