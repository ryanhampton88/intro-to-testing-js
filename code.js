// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    //refactored code
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    }
    if (input === null) {
        return "Not a valid input";
    }
    if (input === "") {
        return "Hello, World!";
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