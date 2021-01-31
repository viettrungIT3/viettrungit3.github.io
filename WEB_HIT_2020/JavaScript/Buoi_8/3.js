const listUser = [
    {name: 'AAA', age: 18},
    {name: 'AAA', age: 8},
    {name: 'AAA', age: 18},
    {name: 'AAA', age: 8},
    {name: 'AAA', age: 18}
]

// function out( listUser, fn) {
//     const newArr = [];
//     for (const user of listUser) {
//         newArr.push( fn(user) );
//     }
//     return newArr;
// }

// function In(user) {
//     return `Xin chào <b>${user.name}</b>  ${user.age}  tuổi.`
// }

// console.log( out( listUser, In));


// const newArr = listUser.map( function ( value, index) {
//     return `<p>Xin chào <b>${value.name}</b>  ${value.age}  tuổi</p>.`
// })
// console.log(newArr);

const newArr = listUser.filter( function ( value, index) {
    if (value.age > 10 ) {

    }
})
console.log(newArr.map( function ( value, index) {
    if (value.age > 10 ) {
        return `<p>Xin chào <b>${value.name}</b>  ${value.age}  tuổi</p>.`
    }
})); 
