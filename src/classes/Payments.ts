import { HasFormatter } from '../interfaces/HasFormatter.js'

// interfaces with classes 

export class Payment implements HasFormatter{
    constructor (
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    // this method is now required due to the HasFormatter interface which has the method format as its rule
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}

