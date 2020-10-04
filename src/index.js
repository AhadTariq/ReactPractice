//Spreading
const f = [1, 2, 4];
const d = [3];

const combined = [...f, ...d];
console.log(combined);

//class

class Person {
  contructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Walk");
  }
}

const person = new Person("Mosh");
person.walk();
