// interfaces with classes 
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // this method is now required due to the HasFormatter interface which has the method format as its rule
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
