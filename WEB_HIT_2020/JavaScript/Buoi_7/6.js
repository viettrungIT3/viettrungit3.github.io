const meo = {
    name: "Nam",
    age: 5,
    gen: 'Nữ',
    eat: function() {
        console.log(`${this.name} đang ăn`);
        console.log(`${meo.name} đang ăn`);
    } 
}
meo.eat()