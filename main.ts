// 1. Given the data below, define a type alias for representing users.

type User = { name: string; age: number; company?: string };
let users: User[] = [
  {
    name: "Shoha Tsuchida",
    age: 99,
    company: "Coding Temple",
  },
  {
    name: "Dylan Katina",
    age: 99,
  },
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

const day: DayOfWeek = "thursday";

// 3. Given the Person class below, create a getter for getting the full name of a person.

class ExtendedString {
  title(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
}
class Person extends ExtendedString {
  constructor(public firstName: string, public lastName: string) {
    super();
  }

  getFullName() {
    return `${this.title(this.firstName)} ${this.title(this.lastName)}`;
  }
}

const guy = new Person("johnny", "banana");
console.log(guy.getFullName());

// // 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary.
class Employee extends Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public salary: number
  ) {
    super(firstName, lastName);
  }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface EmployeeInterface {
  name: string;
  salary: number;
  address: {};
}
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

let employees: EmployeeInterface = {
  name: "Christian Askew",
  salary: 1_000_000,
  address: {
    street: "Thieves st",
    city: "Seattle",
    zipCode: 98101,
  },
};
