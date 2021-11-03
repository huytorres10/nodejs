var Emitter = require('./emitter')

var emitter = new Emitter()

emitter.on('bad', function () {
    console.log('Hoc qua ngu, diem qua kem');
})
emitter.on('bad', function () {
    console.log('Hoc qua ngu, deo the cuu van noi');
})

const scores = [10, 4]

scores.forEach(element => {
    if(element < 5){
        console.log('Diem kem the: ', element);
        emitter.emit('bad')
    }
});