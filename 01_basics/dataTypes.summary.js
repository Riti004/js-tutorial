//in basis of how we store data in memory and how we access it we can devide it into two type

//1.premitive:string,number,null,undefine, boolean,symbol,BigInt

//2.nonprimitive:array,objects,function 

//+++++++++++++++++++++++ MEMORY++++++++++++++++++
//1.STACK=>premitive
//2.heap=>nonprimitive
let myName="ritikaAdak";
let mynickname=myName;
mynickname="momo";
//console.log(myName);
//console.log(mynickname);

let userOne ={
    email:"user1@gmail.com",
    upi:"user1@ybl"
};
let userTwo = userOne;//giving object a diffrent name not coping 

userTwo.email="user2@gmail.com"; //updated the value so both giving user2@gmail.com
console.log(userTwo.email);//o/p=>user2@gmail.com
console.log(userOne.email);//o/p=>user2@gmail.com 

