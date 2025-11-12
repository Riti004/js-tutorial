

function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
    console.log("A");
}
// sayMyName();

// function addTwoNumbers(number1,number2){//(number1,number2)=>parameters
//     console.log(number1+number2);//results: undefined
// }
function addTwoNumbers(number1,number2){//(number1,number2)=>parameters
    // let result=number1+number2;
    // return result;
    return number1+number2;
    //anything after return does not excecute inside function
}
const result=addTwoNumbers(5,6);//(5,6)=>arguments
//console.log("results:",result);

// function loginUserMessage(user){
//     return `${user} just logged in`
// }
// console.log(loginUserMessage("ritika"));

function loginUserMessage(user){
    if(!undefined){
        console.log("please enter a username");
        return ;
    }
    return `${user} just logged in`
}
// console.log(loginUserMessage());

// function calculateCartValue(...num1){
//     return num1;
// }
// console.log(calculateCartValue(200,300,400,500));//=>[ 200, 300, 400, 500 ]

function calculateCartValue(val1,val2,...num1){
    return [num1,val2,val1];
}
//console.log(calculateCartValue(200,300,400,500));//[ [ 400, 500 ], 300, 200 ]

const user={
    name:"ritika",
    email:"ritika@gmail.com"
}
function handelObj(anyobject){
    console.log(`username is ${anyobject.name} and email is ${anyobject.email}`)
}
//handelObj(user);
// handelObj({
//     name:"adak",
//     email:"ritika044@gmail.com"
// })

const myNewArr=[100,200,300,400]
function resturnSecondVal(getarray){
    return getarray[1];
}
console.log(resturnSecondVal(myNewArr))
 


