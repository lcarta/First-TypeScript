interface Person {  //A
  firstName: string; //B
  lastName: string; //C
}

function greeter(person: Person) { //D
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Luca", lastName: "Carta" };

document.body.textContent = greeter(user);