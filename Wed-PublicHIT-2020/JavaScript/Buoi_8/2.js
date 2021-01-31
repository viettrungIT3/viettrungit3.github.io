/*function map( arr, fn )  {
    for (let ele of arr) {
        fn(ele);
    }
}

arr = [ 1, 2, 3, 4, 5];
arr.push(99);

map( arr, function(ele){
    console.log( ele * 2);
});

console.log(arr);
*/
//C2
function map( arr, fn )  {
    const newArr = [];
    for (const ele of arr) {
        newArr.push( fn(ele) );
    }
    return newArr;
}

function multi(ele){
    // return ele * 2;
    return ele.toString();
}

const arr = [ 1, 2, 3, 4, 5];

console.log( map(arr, multi));
