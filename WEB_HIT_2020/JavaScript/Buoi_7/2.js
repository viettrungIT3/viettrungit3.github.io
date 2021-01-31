var a = 1;
var b = 'chị Ngọc về đi!';
var c = true;
var d = {
    name: "Nam",
    age: 5
}
var e = [1, 2, 3, 4, 5]
//ngoài khai báo kiểu var, thì còn có thể khai báo bằng let const

//in ra các giá trị a, b, c, d, e
console.log( a);
console.log( b);
console.log( c);
console.log( d);
console.log( e);

//in ra các kiểu giá trị a, b, c, d, e
console.log( typeof a);
console.log( typeof b);
console.log( typeof c);
console.log( typeof d);
console.log( typeof e);

//Nối chuỗi 
console.log( d.name + ' co tuoi la ' + d.age );
console.log(`${d.name} co tuoi la ${d.age}`)