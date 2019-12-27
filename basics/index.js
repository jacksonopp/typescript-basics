// varibles
let lucky;
lucky = 36;
let font;
font = "bold";
const person1 = {
    first: "johanna",
    last: "ruby"
};
const person2 = {
    first: "jackson",
    last: "oppenheim",
    fast: false
};
// functions
function pow(x, y) {
    return Math.pow(x, y);
}
pow(3, 4);
// arrays
const arr = [];
arr.push(1);
// arr.push("36"); err
// arr.push(false); err
const newArr = [];
// generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(2);
console.log(z.value);
