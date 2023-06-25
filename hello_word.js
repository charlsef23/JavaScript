
// Hola mundo

/* Comenntarios */

console.log("Hola, JavaScript!");

// Variables

var myString = "Esto es una cadena de texto"
console.log(myString);

let myString2 = "Esto es una cadena de texto"
myString2 = "Aqui cambio el valor de la cadena de texto"
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1) //Aun asi my nuNumber tiene el valor 11
console.log(myNumber)

console.log(myString + " " + myNumber) //+ " " + (Es para separar)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool + myNumber2)

myBool = undefined
console.log(myBool)

let myUndefined
console.log(myUndefined)

//Constantes

const MY_CONST = "Mi propiedad constante"
//MY_CONST = "Otro valor" Error
console.log(MY_CONST)

// Control de flujo

if (myNumber == 10 && myString == "Hola") {
    console.log("El valor es 10")
} else if (myNumber == 11 || myString == "Hola") {
    console.log("El valor no es 11")
} else {
    console.log("El valor no es 10")
} 

myBool = null

if(myBool == null) {
    console.log("null")
}

// Funciones

function myFunction() {
    return "Mi función"
}

console.log(myFunction())

// Listas

let myList = ["Carlos", "Esteve", "@charlsef23", 20]
console.log(myList)
console.log(myList[0])

// Set

let mySet = new Set(["Carlos", "Esteve", "@charlsef23", 20, "Carlos"])
mySet.add("Esteve")
console.log(mySet)

// Mapas

let myMap = new Map([["Carlos", 20], ["Juan", 35], ["Pedro", 18]])
myMap.set("Niku1525", 20)
console.log(myMap)
console.log(myMap.get("Carlos"))

// Bucles

for (const value of myList) {
    console.log(value)
}

let myCounter = 0

while (myCounter < myList.length) {
    console.log(myList[myCounter])
    myCounter++
}

// Clases

class MyClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Carlos", 20)
console.log(myClass)
console.log(myClass.name)

// Enum

const MyEnum = {
    DART: "dart",
    PYTHON: "python",
    SWIFT: "swift", 
    JAVA: "java", 
    KOTLIN: "kotlin", 
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log