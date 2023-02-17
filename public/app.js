// classes - all classes are public by default, but can assign modifiers
// initialise values in a constructor and assign them to the values
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor (c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }
//     // Can shorten the above, but must have the modifiers for it to work 
//     constructor (
//         readonly client: string,
//         private details: string,
//         public amount: number,
//     ){}
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// } Above moved to invoices.ts as a sepereate module
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number; 
// }
// const me: IsPerson = {
//     name: 'kei',
//     age: 32,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend (amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     }
// };
// console.log(me);
// // can now use IsPerson as a type 
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name)
// }
// greetPerson(me);
// create an object using the class
const invOne = new Invoice('mario', 'worked on the mario website', 250);
const invTwo = new Invoice('Luigi', 'worked on the luigi website', 300);
// can change what the propeties are 
// invOne.client = 'yoshi';
// all invoices created using the invoice class can be added
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// grab an anchor tag - the ! tells it that there is an anchor tag on the page 
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// passing a class so doesnt know its a form so can cast a type to it
const form = document.querySelector('.new-item-form');
// gran each element in the form by their id
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// add event listener an pass the event as parameter then grab the values ofthe form 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
