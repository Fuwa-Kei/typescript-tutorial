let greet = () => {
    console.log("Hello World");
}

// can also set it as a function 
let hello: Function;

hello = () => {
    console.log("Hello");
}

// specify parameter types, the ? makes that parameter optional 
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
}
// both will work
add(2,3,4)
add(2,5)

// if c not specified it will be default 10
const sub = (a: number, b: number, c: number | string = 10) => {
    console.log (a+b)
}
