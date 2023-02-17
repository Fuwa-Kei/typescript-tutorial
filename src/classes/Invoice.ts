import { HasFormatter } from '../interfaces/HasFormatter.js'

// interfaces with classes 

export class Invoice implements HasFormatter{
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    // this method is now required due to the HasFormatter interface which has the method format as its rule
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

