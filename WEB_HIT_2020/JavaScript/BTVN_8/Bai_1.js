/* ví dụ
input: [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7]
output: 
{ 
    '1': 2, 
    '2': 2, 
    '3': 2, 
    '4': 1, 
    '5': 2, 
    '6': 2, 
    '7': 2, 
    '8': 1 
}
*/

const arr = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7];

// const countElement = arr.reduce( (value, item) => {

// });

// console.log(countElement);

const countElement = arr.reduce((value, item) => {
    if (value[item] = (item in value)) value[item]++;
    else value[item] = 1;
    return value;
}, {});

console.log(countElement);
