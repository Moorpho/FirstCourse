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