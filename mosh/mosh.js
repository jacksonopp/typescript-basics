// enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let backgroundColor = Color.Red;
// type assertion
let message;
message = "abc";
let endsWithC = message.endsWith("c");
let altWay = message.endsWith("c");
// arrow functions
let log = function (input) {
    console.log(input);
};
const doLog = input => console.log(input);
// OOP in TS
