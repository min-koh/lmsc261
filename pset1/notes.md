## Variables


## Array

index가 필요해, fruit 6432가 학교 떠나면 어떡해.

Arrays: Storing Multiple Values (in Python: list)
Array items are accessed by indicating their index.

***
let names = ["David", "Kate", "Josh"];
The declared array has a name.

let fruits = [
    "mango",
    "kiwi",
    "strawberry",
];
print(fruits);

let fruitInstance = fruits[1];
print(fruitInstance);

fruits.push("apple"); // get rid of things from the end
print(fruits); 
fruits.pop(); // get rid of things from the end
fruits.pop();
print(fruits);

// initializing empty value 먼저.

let spiritAnimal = [];
let a = prompt("Whats YOUR sprit animal?") 
spiritAnimal.push(a); // spiritAnimal.push("what's your spirit animal?");
spiritAnimal.push(a); // spiritAnimal.push("what's your spirit animal?");
spiritAnimal.push(a); // spiritAnimal.push("what's your spirit animal?");
spiritAnimal.push(a); // spiritAnimal.push("what's your spirit animal?");

print(spriritAnimal);

***
Asking user for an input: prompt();
Adding a value into an array: anArray
Creating a random integer: Math.random() / Math.floor()



let a = prompt("Whats YOUR sprit animal?") 


let spiritAnimal = [];
let names = ["David", "Kate", "Josh"];

let a = prompt("Whats YOUR sprit animal?") 

spiritAnimal.push(a); // spiritAnimal.push("what's your spirit animal?");

Math.random();
Print
***

## Conditionals
Different actions for different conditions
{}: scope

const minHeight = 3;
let myHeight = 5;
let isTallEnough = myHeight >= minHeight; // true

if (isTallEnough){
    let message = "LFG you are: " + myHeight + " tall"
    print(message);
} else {
    print("See you next year!")
}
print("Amusement parks are so fun!");

***
let numInstruments = prompt("How many instruments do you play?");

if(numInstruments > 1){
    print("Wow you are a multi-instrumentalist!");

} else if (numInstruments == 1){ // same type, decimal
    print("Oh Okay");

} else if (numInstruments < 0){
    print("What do you mean?")

} else {
    print("It's all good music is so hard.");
}

print("see ya later!");

***
let numInstruments = prompt("How many instruments do you play?");

if(numInstruments > 1){ // requires boolean
    print("Wow you are a multi-instrumentalist!");

} else if (numInstruments == 1){ // same type, decimal, // requires boolean
    print("Oh Okay");

} else if (numInstruments < 0){
    print("What do you mean?")

} else { // boolean not required
    print("It's all good music is so hard.");
}

print("see ya later!");

midterm: drawing with PI
p5.js - orbit control example
audio plugin design?

***
Those 3 are same
i = i + 1
i += 1
i++

***
For loop
for (Number variable; boolean; expression(mathematic));
***

const activities = ["babysit tadpoles",
"flies for lunch",
"tongue stretch",
"swimming lesson"];

let index = prompt("what's your index?)
index = index % 4;
print(activities[index])