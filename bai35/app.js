//'use strict'
class Persion{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHello(){
        console.log(`Hello: ${this.firstName} ${this.lastName}`);
    }
}

var huy = new Persion('Huy', 'Torres')
huy.sayHello()