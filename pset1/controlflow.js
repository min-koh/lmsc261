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