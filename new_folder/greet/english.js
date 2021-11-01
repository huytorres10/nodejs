var greeting = require('./greetings.json')

var sayHello = function () {
    console.log(greeting?.en ?? 'Hello1');
}
module.exports = sayHello