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

// const string = "            My      name is Shirisha Singh         ";
// const nextString = "            My name is Shirisha Singh         ";
// const nString = "          Hello World                   ";
// const newString = string.trim();
// const newStrings =nextString.trim();
// console.log(newString);
// console.log(newStrings);
// console.log(nString.trim());

// slice(start,end)

// let string = "HelloNepal";
// let result = string.slice(1,4);
// console.log(result);
// console.log(string.slice(1,4));

// string1.concat(string2) or simply +

// let string1 = "hello";
// let string2 = 123;
// let result = string1.concat(string2);
// console.log(result);
// console.log(string1.concat(string2));
// let output = string1 +string2;
// console.log(output);
// console.log(string1 + string2);

// string.replace(searchValue,newValue)
// let string= "My school";
// let result = string.replace("school", "home");
// console.log(string);
// console.log(result);
// console.log(string.replace("school", "country"));


//string.replaceAll(searchValue, newValue)
// let string = "MyMyMyMyMy";
// console.log(string.replaceAll("My", "I"));


// string.charAt(index)
// const string = "MY COUNTRY NAME IS NEPAL";
// const result = string.charAt(6);
// console.log(result);
// console.log(string[8]);

// string.inclues("value")
// let string = "hello";
// console.log(string.includes("a"));