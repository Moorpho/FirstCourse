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

let arr = [1,2,3,4,5];
arr[99] = 99;

for (let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
}

console.log(arr);

let a = 5;