//Kế thừa EventEmitter
//Truyền data bằng EventEmitter

var EventEmitter = require('events')
var util = require('util')

function Dialog() {
    this.message = "Hello word !"
}

util.inherits(Dialog, EventEmitter)

Dialog.prototype.sayHello = function(data){
    console.log(`${this.message}: ${data}`);
    this.emit('hello', data)
}

var dialog= new Dialog()

dialog.on('hello', function(data){
    console.log(`Day la 1 emit tu EventEmitter: ${data}`);
})
dialog.sayHello('Huy Torres')