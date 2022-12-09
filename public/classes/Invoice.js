// Classes
export class Invoice {
    /*//client: string;
    //details: string;
    //amount: number;*/
    constructor(
    /*c: string, d: string, a: number*/
    /* this.client = c;
    this.details = d;
    this.amount = a; */
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
