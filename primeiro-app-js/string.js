// usando o operador + 

let str1 = "Olá";
let str2 = "Mundo";

console.log(str1 + str2);
console.log(str1 + "Grande" + str2);

// tome cuidado com numeros

let num1 = 1;
let num2 = "1";

console.log(num1 + num2);
console.log(num1 + 1);

// evitando problemas com numberos

let stri1 = "0";
let stri2 = "plus";
let stri3 = " 1 = ";
let nume1 = 1;

let res = stri1.concat(stri2, stri3, nume1);
console.log(res);

// working with strings

let string1 = "Olá";
let string2 = "Mundo!";
let string3 = string1 + string2

console.log(string1 + " Grande " + string2)

let numero1 = 1;
let numero2 = "3";

console.log(numero1 + numero2);
console.log(numero1 + 1)


let strg = "0";
let numer1 = 1;
let numer2 = 2;
let numer3 = 4;

console.log(strg.concat(numer1 + numer2 + numer3))
numer1.concat(numer1.concat(numer1, numer2))