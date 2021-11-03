//var Emitter = require('./emitter')

var Emitter = require('events')
var config = require('./config')

var emitter = new Emitter()

emitter.on(config.BAD_SCORES, function () {
    console.log('Hoc qua ngu, diem qua kem');
})
emitter.on(config.BAD_SCORES, function () {
    console.log('Hoc qua ngu, deo the cuu van noi');
})

// emitter.on('bad', function () {
//     console.log('Hoc qua ngu, diem qua kem');
// })
// emitter.on('bad', function () {
//     console.log('Hoc qua ngu, deo the cuu van noi');
// })

const scores = [10, 4]

scores.forEach(element => {
    if(element < 5){
        console.log('Diem kem the: ', element);
        emitter.emit(config.BAD_SCORES)
    }
});