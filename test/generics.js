"use strict";
// generate random ID then attach it to object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', type: 'dino', });
console.log(docOne);
// problem with above code is it will not know what docOne.name is so can put a generic <T> to capture the properties in the object
// must include extend to specify what it can return e.g. object or more specific {name: string} 
const addUID2 = (obj) => {
    let uid2 = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid2 });
};
let docTwo = addUID2({ name: 'yoshi', type: 'dino', });
console.log(docTwo.name);
// now can define anything in data property 
const docThree = {
    uid: 4,
    resourceName: 'person',
    data: 'hero'
};
const docFour = {
    uid: 4,
    resourceName: 'person',
    data: ['hero', 'marksman']
};
const docFive = {
    uid: 4,
    resourceName: 'person',
    data: { role: 'hero' }
};
