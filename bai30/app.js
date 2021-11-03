var persoon = {
    lastName: "",
    fullName: "",
    getFullName: function(){
        return `${this.lastName} ${this.fullName}`;
    }
}

var hoa = Object.create(persoon)
hoa.lastName = "Hoa"
hoa.fullName = "Le"
var yen = Object.create(persoon)
yen.lastName = "yen"
yen.fullName = "Le"

console.log(hoa.getFullName());
console.log(yen.getFullName());