// let options = {
//     width: 1024,
//     height: 1024,
//     name:"test",
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;

// for (let key in options) {
//     console.log('Parameter ' + key  + ' have a value of ' + options[key] );
// }

// console.log(Object.keys(options).length)

// let arr = ["first",2,3,"four",5];

// console.log(arr);

// for (let i = 0; i < arr.length;i++) {
//     console.log(arr[i]);
// }

// let ans = prompt("",""),
// arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["sdsd","sdere","dd","ewr"],
// i =arr.join(', ');

// console.log(i);

let arr = [1,15,4],
i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(arr);
