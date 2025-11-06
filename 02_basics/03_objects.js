//singleton
//object litarals
const mysym=Symbol("key1");
const JsUser={
    name:"ritika",//the keys are by defult string
    [mysym]:"mykey1",
    "fullname":"ritika adak",
    age : 21,
    adress: "hooghly",
    email:"ritikaadak0@gmail.com",
    isLoggedIn:false
};
//access
// console.log(JsUser.name);//method 1 
// console.log(JsUser["fullname"]);//method 2 (most imp one ),ass keys are by defult string we put it inside [ string ]^ as string 

// console.log(typeof JsUser[mysym]);

//update
JsUser.email="ritika02222@gmail.com";
//console.log(JsUser);
//TO FREEZE
//Object.freeze(JsUser);
JsUser.email="ritika@gmail.com";
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greeting2());
console.log(JsUser.greeting2);
