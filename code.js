// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    //refactored code
    if (input === undefined) {
        return "Hello, Jane!";
    } else {
        return "Hello, " + input + "!";
    }
    //original test code below
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // }
    // if (input === "Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!";
    // }

}