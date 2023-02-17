"use strict";
let greet = () => {
    console.log("Hello World");
};
// can also set it as a function 
let hello;
hello = () => {
    console.log("Hello");
};
// specify parameter types, the ? makes that parameter optional 
const add = (a, b, c) => {
    console.log(a + b);
};
// both will work
add(2, 3, 4);
add(2, 5);
// if c not specified it will be default 10
const sub = (a, b, c = 10) => {
    console.log(a + b);
};
