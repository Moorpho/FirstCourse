function first(
    setTimeout(() => {
        
    }, timeout);
)

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang,callback) {
    console.log("I learn"+ lang);
    callback();
}
function done() {
    console.log("I did 3rd lesson!")
}
learnJS("JavaScript", done);
