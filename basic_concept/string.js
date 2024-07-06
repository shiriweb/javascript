// // creating a string
// let string = "Mount Everest";
// console.log(string);

// //find length of string
// // Template Literals->`` where `$(expression)`->also known as string interpolation which is used create string by doing substitution of placeholder
// console.log(`The length of string is :${string.length}`);

// // indexing in string
// console.log(`The letter at the given string position is ${string[4]}`);

// // Escape Character ->\n,\t
// console.log("Shirisha\nSingh");
// console.log("Shirisha\tSingh");
// let value= "Shirisha\tSingh";
// console.log(value.length);


// string to uppercase
// const string = "Hello Shirisha";
// console.log(string.toUpperCase());

// string to lowercase
// const string = "My name is Shirisha Singh";
// const newString = string.toLowerCase();
// console.log(newString);

// string.trim() ----> used to remove the whitespace

const string = "            My      name is Shirisha Singh         ";
const nextString = "            My name is Shirisha Singh         ";
const nString = "          Hello World                   ";
const newString = string.trim();
const newStrings =nextString.trim();
console.log(newString);
console.log(newStrings);
console.log(nString.trim());