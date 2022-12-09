import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "Plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs); */
/* const InvOne = new Invoice("mario", "work on the mario website", 250);
const InvTwo = new Invoice("luigi", "work on the luigi website", 400);

let invoices: Invoice[] = [];
invoices.push(InvOne);
invoices.push(InvTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
}); */
/*InvOne.client = "yoshi";
InvTwo.amount = 400;*/
/* const anchor = document.querySelector("a"); //this works fine
if (anchor) {
  // the if let it take for conditions where it cant fetch the achor
  console.log(anchor.href);
} */
// Alternative
/*
const anchors = document.querySelector("a")!; // the inclusion of ! tells that the condition is uncertain and I am aware
console.log(anchors.href);
*/
const form = document.querySelector(".new-item-form"); // this is the type casting
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
