var obj = {
    sayHello: 'Hello'
}
console.log(obj.sayHello);
console.log(obj['sayHello']);

const prop = 'sayHello'
console.log(obj[prop]);

var arr = [];
arr.push(function(){
    console.log('Hello NodeJs 1');
})
arr.push(function(){
    console.log('Hello NodeJs 2');
})
arr.push(function(){
    console.log('Hello NodeJs 3');
})

arr.forEach(element => {
   element(); 
});