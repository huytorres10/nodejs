var Dialog = require('./dialog')

var dialog = new Dialog('Huy', 'Torres')
dialog.on('hello', function(firstName, lastName){
    console.log('Vua Emit ra Hello: ', `${firstName} ${lastName}`);
})

dialog.sayHello()