let randomNumber = Math.random(); // 0~1
randomNumber = randomNumber * 20; // 0~20
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber - 10; // -10 ~ 10
print("It's " + randomNumber + " outside.");

if(randomNumber > 0){ 
    print("Gee, it's getting warmer!");

} else if (randomNumber < 0){
    print("Sheesh, it's getting colder!");

} else {
    print("Guess nobody's touched the thermostat.");
}