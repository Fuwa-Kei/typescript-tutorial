let greet1: Function;

// function with 2 parameters of type string returning a void 
let greet2: (a: string, b: string) => void;
greet2 = (name: string, greeting: string) => {
    console.log(`4{name} says ${greeting}`);
}

// function with 3 parameters, 2 numbers 1 string adn return a number 
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo; 
    } else {
        return numOne - numTwo;
    }
}
// function with an object as parameter and then a type created using the function signature
let logDetail: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};
logDetail = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
