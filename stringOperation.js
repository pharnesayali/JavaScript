//string formation
let empName = "Sayali Pharne";
console.log(
  "empName:",
  empName,
  "empName length:",
  empName?.length,
  "empIndex 8 value:",
  empName[8]
);

// Template literals - the way for the expression embedding in the string

let schoolAccessory = {
  Pen: 10,
  student: "sayali",
};
console.log(
  `this is a school accessory list ${schoolAccessory?.Pen} pen to student ${schoolAccessory?.student}`
); //Template literals

let empNames = "Sayali\nPharne";
console.log("empNames:", empNames); //creates new line in string \n

let empNamed = "Sayali\tPharne";
console.log("empNamed:", empNamed); //creates tab in string \t

let nameString = "Anu";
let valueString = "     Sayali Anu  Viraj";
console.log("nameString", nameString.toUpperCase());
console.log("nameString", nameString.toLowerCase());
console.log("valueString", valueString.trim()); //trim removes start and end spaces of the string.

let sliceString = "Full Stack Developer";
console.log("sliceString:", sliceString.slice(5, 9)); // it returns in op only cut part with the index values //stac - op

let mainString = "sayali";
let subString = "pharne";

let concatString = mainString.concat(" " + subString);
console.log("concatString:", concatString); //this method is use for the concatenation of two strings

let replaceStringValues = "Sayali";
console.log("replaceStringValues", replaceStringValues.replace("S", "M"));
console.log("replaceStringValues", replaceStringValues.replaceAll("a", "")); //replace variable with new one

let indexValue = "Sayali";
console.log("indexValue", indexValue.charAt(4)); //this method is use for the value or letter from it's index

indexValue[3] = "m";
console.log("indexValue", indexValue); // in string we can't change the value or characters using index values, string is immutable.

let promptValue = prompt("Enter your fullname without space");
console.log("promptValue", promptValue);

// let createUserName = `@${promptValue}${promptValue.length}`;
let createUserName = "@" + promptValue + promptValue.length;
console.log("createUserName", createUserName);
