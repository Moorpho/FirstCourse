let options = {
    width: 1024,
    height: 1024,
    name:"test",
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;

for (let key in options) {
    console.log('Parameter ' + key  + ' have a value of ' + options[key] );
}

console.log(Object.keys(options).length)

let arr = ["first",2,3,"four",5];

console.log(arr);

// for (let i = 0; i < arr.length;i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass){
    console.log(i + ':' + item + "(array: " + mass + ")")
})

console.log(arr);

let mass = [1,3,4,6,7];

 for (let key of mass) {
    console.log(key);
 }