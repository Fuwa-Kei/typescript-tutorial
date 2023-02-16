let character = 'mario'
let age = 30
let isBlackBelt = 20

const circ = (diameter: number) => {
    return diameter * Math.PI
}

// argument must be number 
console.log(circ(10))

let names = ['Luigi', 'Mario', 'Yoshi']
names.push('Toad');

// if an array of strings then can only add/replace with strings 

let mixed = ['ken', 4, 'chun-li', 9, true]
// mixed arrays allowed as log as pre specified 
// now can replace string with a number
mixed[0] = 3;

// whan you decalare anything as a specific type that cannot be changed 
let ninja = {
    name: 'hanabi',
    type: 'marksman',
    kills: 5
}

// declare an array with its type + the array 
// ninja is an arrays of strings, starting with an empty string
let ninjas: string[] = [];
ninjas.push('hayabusa')

// can have mixed types in array (union types)
let mixedArrary: (string|number)[] = [];
mixedArrary.push('cyclops');
mixedArrary.push(3);


// objects
let hanabi: object;
hanabi = {role: 'marksman', skills: ['fan', 'ulti']}

// any types
let hero: any = 'natan'
hero = true;

