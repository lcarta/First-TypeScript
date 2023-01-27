"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Luca", lastName: "Carta" };
document.body.textContent = greeter(user);
