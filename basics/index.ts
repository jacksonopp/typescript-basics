// varibles
let lucky: number;

lucky = 36;

// custom types
type Style = "bold" | "italic";

let font: Style;

font = "bold";

// objects/interfaces
interface Person {
   first: string;
   last: string;
   [key: string]: any; // additional keys
}

const person1: Person = {
   first: "johanna",
   last: "ruby"
};
const person2: Person = {
   first: "jackson",
   last: "oppenheim",
   fast: false
};

// functions
function pow(x: number, y: number): number {
   return Math.pow(x, y);
}

pow(3, 4);

// arrays
const arr: number[] = [];

arr.push(1);
// arr.push("36"); err
// arr.push(false); err

const newArr: Person[] = [];

type tupleList = [number?, string?, boolean?];

// generics
class Observable<T> {
   constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(2);

console.log(z.value);
