var character = 'mario';
var age = 30;
var isBlackBelt = 20;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// argument must be number 
console.log(circ(10));
var names = ['Luigi', 'Mario', 'Yoshi'];
names.push('Toad');
// if an array of strings then can only add/replace with strings 
var mixed = ['ken', 4, 'chun-li', 9, true];
// mixed arrays allowed as log as pre specified 
// now can replace string with a number
mixed[0] = 3;
// whan you decalare anything as a specific type that cannot be changed 
var ninja = {
    name: 'hanabi',
    type: 'marksman',
    kills: 5
};
// declare an array with its type + the array 
// ninja is an arrays of strings, starting with an empty string
var ninjas = [];
ninjas.push('hayabusa');
