// grab an anchor tag - the ! tells it that there is an anchor tag on the page 
// const anchor = document.querySelector('a')!;

// console.log(anchor.href);


// const form = document.querySelector('form')!;

// passing a class so doesnt know its a form so can cast a type to it
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// gran each element in the form by their id
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

console.log(form.children);

// add event listener an pass the event as parameter then grab the values ofthe form 
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})