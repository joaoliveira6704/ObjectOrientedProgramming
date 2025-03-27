// Object that describes a person
const person1 = {
  firstName: "João",
  lastName: "Oliveira",
  nif: 82471289412,
};

console.log(person1.lastName);

//percorrer propriedades do objeto
for (let prop in person1) {
  console.log(`name: ${prop}, value: ${person1[prop]}`);
}

let employees = [];

let employee = {
  firstName: "John",
  lastName: "Doe",
  salary: 2800,
};
employees.push(employee);

employee = {
  firstName: "Jane",
  lastName: "Doe",
  salary: 3700,
};

employees.push(employee);

employees.forEach((element) => {
  console.log(element.firstName, element.lastName, element.salary);
});
