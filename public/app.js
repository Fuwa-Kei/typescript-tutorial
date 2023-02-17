"use strict";
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
console.log(form.children);
// add event listener an pass the event as parameter then grab the values ofthe form 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
