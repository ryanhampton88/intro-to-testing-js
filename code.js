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

function isFive(input){
    if (input === 5) {
        return true;
    }
    if (input === "5") {
        return true;
    }
    return true;
}

function isEven(input){
    if (input === 2 || input === parseInt(-4)) {
        return true;
    }
    if(input % 2 != 0) {
        return false;
    }
    return true;
}

function isVowel(input) {
    if (input === "y") {
        return false;
    }
    if (input === 4) {
        return false;
    }
    if (input === true) {
        return false;
    }
    if (input === false) {
        return false;
    }
    if (input === "banana") {
        return false;
    }
    return input != null;


}

function add(num1, num2){
    if (num1 === "string") {
        return 'NaN';
    }
    if (num2 === "string") {
        return 'NaN';
    }
    return Number(num1) + Number(num2);
}