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
let numInstruments = prompt("How many instruments do you play?");

if(numInstruments > 1){ // requires boolean
    print("Wow you are a multi-instrumentalist!");

} else if (numInstruments == 1){ // same type, decimal, // requires boolean
    print("Oh Okay");

} else if (numInstruments == 0){
    print("It's all good music is so hard.");

} else { // boolean not required
    print("???");
}

print("see ya later!");


***
For loop
for (Number variable; boolean; expression(mathematic));
***
for(let i = 0; i <= 10; i++){
    print(i);
}
***

const activities = ["babysit tadpoles",
"flies for lunch",
"tongue stretch",
"swimming lesson"];

// let index = prompt(("what's your index?)
index = index % 4;
// print(activities[index])

for(let i = 0(variable initialization); i <100(boolean); i++){
    let modula = i (5 넣으면 0 나옴, 5를 5로 나누면 나머지가 0이니까)
}

***
let games = [
    "pokemon",
    "ghost of tsushima",
    "street fighter",
    "civilization",
    "project zomboid",
    "lost in blue",
    "GTA 5"
];

for(let index = 0; index < games.length; index++){
    print(games[index]);
}

/* every time we have to update the number when we add game
***
const numGreencardsAvailable = 20;
let numImmigrants = 120;

let families = ["mom", "dad", "sis", "bro"]
for (let p = 0); p < numImmigrants; p++){
    if(p < numGreencardsAvailable){
        print("welcome!");
        for(let j = 0; j <4; j++){
            print("heres tickets for your: " + families[j])
        }
    } else {
        print("Please try again next year :)");
    }
}