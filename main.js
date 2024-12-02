var name = 'Chespirito';
let surname = 'Totototo';
const PI = 3.1415;
let n1 = 20;
let n2 = 23;
let result = n1 + n2;

console.log(surname);
console.log("Hello World"); // Muestra el mensaje por consola
document.write("<h1>Hola Mundo</h1>"); //Muestra el mensaje por pantalla
console.error("Mi error customizado"); //Muestra por consola un mensaje de error
console.log('this is a string');
console.log(true);
console.log({
   "username": 'Federico',
   "score": 70.2,
   "hours": 56,
   "professional": true,
   "friends": ["Victor", "Albino", "Rulo"] 
})
console.log(result)
console.log(name + " " + surname)

//control de flujo
let passwordDB = 'loco1234';
let input = 'loco1234';
let check = input == passwordDB;

if (check == true){
    console.log("Login Correcto");
}
else{
    console.log("Login Incorrecto");
}
//validación de contraseña

//seguimos con control de flujo
let score = 70;

if (score > 15){
    console.log("Necesitas practicar más");
}
else if (score > 30){
    console.log("Vas por el buen camino del programador Javascript");
}
else{
    console.log("Vas por el mal camino")
}

// Switch
let typeCard = 'DebitCard';

switch(typeCard){
    case 'DebitCard':
        console.log("This is a debit card");
        break;
    case 'CreditCard':
        console.log("This is a credit card");
        break;
    default:
        console.log("You are have not card");
}

// Bucle
let count = 1;
while (count <= 10){
    console.log("Hola Mundo" + " " + count);
    count++;
}

/*
//Tipos de datos
"Hola Mundo" //String
'Hola MUndo' //String
10000 //Number

// boolean
true
false

// array
['Ramon', 'Gabriela', 'Kiki', 'Mia']
[1,2,3,4]
[true, false, true, false]

// object

      //"clave":valor,

{
    "username": 'Alfredo',
    "score": 25.2,
    "hours": 15,
    "professional": true,
    "friends": ['Samanta', 'Raúl', 'Marco', 'Andre']
}

{
    "username": 'Jonathan',
    "score": 5.3,
    "hours": 2,
    "professional": false,
    "friends": ['Pedro', 'Micaela', 'Sergio']
}
*/