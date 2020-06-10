class Person {
  constructor(){
    this.name = "idarous";
    this.age = 24;
    console.log("person created")
  }
  
  printDetails(){
    console.log(this.name, this.age);
  }
}

function printPerson(){
 let person = new Person()
 person.printDetails()
}
let people = [
  {
    name: "idarous",
    age: 24,
  },
  {
    name: "tanvir",
    age: 23,
  },
];

exports.Person = Person;
exports.people = people;
