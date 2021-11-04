var EventEmitter = require('events')

class Dialog extends EventEmitter{
    constructor(firstName, lastName){
        super();
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){
        console.log('Day la func sayHello');
        this.emit('hello', this.firstName, this.lastName)
    }
}
module.exports = Dialog