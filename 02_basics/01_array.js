const arr=[1,2,3,4,5,6];
// console.log(arr[0]);

// arr.push(5);
// arr.push(9);
// arr.pop();
// arr.unshift(9)//pushed value in the start of the array
// arr.shift();//removes the 9 infront ,if there is nothing that we unshifted then it does nothing
// console.log(arr.includes(9));//checks if 9 is included in the array or not 
// console.log(arr.indexOf(3))
// const newArr=arr.join();
// console.log(arr);
// console.log(newArr);//converted into string 

//++++++++ slice and splice ++++++++++

console.log('A',arr);//=>A [ 1, 2, 3, 4 ,5,6]
const arr1=arr.slice(1,3);//returns index 1 to 3-1;
console.log(arr1);//=>[ 2, 3 ]

console.log('B',arr);//=>B [ 1, 2, 3, 4 ,5 ,6]

const arr2=arr.splice(1,3);//returns index 1 to 3;and manupulated the original array , it cuts out the range and the remining array stays 
console.log('C',arr);//=> C [ 1, 5, 6 ]
console.log(arr2);//=>[ 2, 3, 4 ]
