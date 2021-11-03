/*Kế thừa đối tượng trong NodeJS
Trong đối tượng con cần sử dùng Cha.call(this) => để con đọc được các prototype của cha
*/
var util = require('util')
function Persion() {
    this.fisrtNname = "Huy"
    this.lastName = "Torres"
}

Persion.prototype.sayHello = function(){
    console.log(`Hello ${this.fisrtNname} ${this.lastName}`);
}

// var persion = new Persion()
// persion.sayHello()

function SV() {
    Persion.call(this)
    this.sayYeah = function(){
        console.log(`Hello hello: ${this.fisrtNname}`);
    }
}
// SV.prototype.sayYeah = function(){
//     console.log(`Hello hello: ${this.fisrtNname}`);
// }
util.inherits(SV, Persion)
var sv = new SV()
sv.sayYeah()


