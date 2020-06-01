// tsc <filename>.ts --watch --> to run continously like nodemon

const sum = (a: number, b: number) => {
  return a + b;
};

const answer = sum(10, 5);

console.log(answer);

// Tupple
let basket: [string, number];
basket = ["basket", 1];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let SizeName: String = Size[2];
console.log(SizeName);

// Any
let whatever: any = "like JavaScript";
whatever = basket;

// Union
let confused: string | number = "hello";
confused = 5;

// Void
let noob = (): void => {
  console.log("I am Noob.");
};

// Never
let error = (): never => {
  throw Error("Oops!!");
};

// Interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; // By adding ? after the value it becomes optional
}

let fightRobotArmy = (robots: RobotArmy): void => {
  console.log("Fight!!!");
};

// Type Assertion
interface Cat {
  count: number;
  type: string;
  magic?: string; // By adding ? after the value it becomes optional
}

let dog = {} as Cat;
// Now we can use dog.count

// Classes
class Animal {
  private sing: string;
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAWWWR");
// lion.sing --> Can't be used because it's private
console.log(lion.greet());
