var greeting = require('./greetings.json')

var sayHello = function () {
    console.log(greeting?.vi ?? 'Xin chao1');
}
module.exports = sayHello