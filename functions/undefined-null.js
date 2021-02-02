// // undefined for variable
let name;

name = "Bob";

if (name === undefined) {
  console.log("please provide a name");
} else {
  console.log(name);
}

// undefined for a function arguments
// undefined as function return default value

let square = function (num) {
  console.log(num);
};

let result = square();
console.log(result);

//Null as assigned value
let age = 50;
age = null;
console.log(age);
