// enum

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// enums
enum Color {
   Red,
   Green,
   Blue
}

let backgroundColor = Color.Red;

// type assertion
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
let altWay = (message as string).endsWith("c");

// arrow functions

let log = function(input) {
   console.log(input);
};

const doLog = input => console.log(input);
// OOP in TS
