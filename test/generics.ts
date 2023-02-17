// generate random ID then attach it to object

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let docOne = addUID({ name: 'yoshi', type: 'dino',});

console.log(docOne);

// problem with above code is it will not know what docOne.name is so can put a generic <T> to capture the properties in the object
// must include extend to specify what it can return e.g. object or more specific {name: string} 

const addUID2 = <T extends object>(obj: T) => {
    let uid2 = Math.floor(Math.random() * 100);
    return {...obj, uid2}
}

let docTwo = addUID2({ name: 'yoshi', type: 'dino',});

console.log(docTwo.name);

//  generics in interfaces - data can be of any type 

interface Resources<T> {
    uid: number;
    resourceName: string;
    data: T;
} 

// now can define anything in data property 
const docThree: Resources<string> = {
    uid: 4,
    resourceName: 'person',
    data: 'hero'
}

const docFour: Resources<string[]> = {
    uid: 4,
    resourceName: 'person',
    data: ['hero', 'marksman']
}

const docFive: Resources<object> = {
    uid: 4,
    resourceName: 'person',
    data: {role: 'hero'}
}