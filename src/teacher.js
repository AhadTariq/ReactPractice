import { Person } from "./person";

export class Teacher extends Person {
  contructor(name, degree) {
    // super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
