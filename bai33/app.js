/*
Su dung call va apply
call: truyen vao 1 obj moi, casc tham so phia sau la tham so cua ham
apply: truyen vao 1 obj moi, casc tham so phia sau la 1 mang chua tham so cua ham
*/

var persion = {
    name: 'Huy Torres',
    sayHello: function(param1, param2){
        console.log(`Hello ${this.name}`);
        console.log(`param: `, param1, param2);
    }
}

persion.sayHello('Oanh oc', '1998')
persion.sayHello.call({name: 'Be Bia'}, 'Oanh oc1', 2020)
persion.sayHello.apply({name: 'Be Bia'}, ['Oanh oc1', 2020])