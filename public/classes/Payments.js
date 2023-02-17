// interfaces with classes 
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // this method is now required due to the HasFormatter interface which has the method format as its rule
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
