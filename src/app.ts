// classes
// initialise values in a contructor and assign them to the values
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor (c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

// create an object using the class
const invOne = new Invoice ('mario', 'worked on the mario website', 250);
const invTwo = new Invoice ('Luigi', 'worked on the luigi website', 300);

// can change what the propeties are 
invOne.client = 'yoshi'

// all invoices created using the invoice class can be added
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);



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