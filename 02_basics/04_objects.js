//const tinderUser = new Object();//singletan obj

const tinderUser={}//non singletan obj
tinderUser.id="123serf";
tinderUser.name="ritika";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const randomUser={
    email:"ritika@gmail.com",
    name:{
        userName:{
            firstName:"ritika",
            lastName:"adak"
        }
    }
};
//console.log(randomUser.name.userName.firstName)

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2};//object inside object just like 2d array
//console.log(obj3);
//const obj3=Object.assign({},obj1,obj2);//=>{}->target,others are source
const obj3={...obj1,...obj2};//mostly used;(spreed oparator)
//console.log(obj3);

//Object inside Array

const arr=[
    {
        id1:1,
        email:"ritika@gmail.com"
    },
    {
        id2:2,
        email:"ritika2@gmail.com"
    },
    {
        id3:3,
        email:"ritika3@gmail.com"
    },
];
arr[1].email
// console.log(tinderUser);//=>{ id: '123serf', name: 'ritika', isLoggedIn: false }
// console.log(Object.keys(tinderUser));//=>[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.entries(tinderUser));//=>[ [ 'id', '123serf' ], [ 'name', 'ritika' ], [ 'isLoggedIn', false ] ]

const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitash"
}
//course.courseInstructor
const{courseInstructor:instructor}=course;

console.log(instructor);
