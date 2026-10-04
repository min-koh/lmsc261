// function declaration
function greetInMandarin(isFeelingMean, nameToPrint){ // input
    let greeting = isFeelingMean ? "Gundan" : "Nihao"
    print(greeting + nameToPrint);
}

greetInMandarin(false, "Bryan");
greetInMandarin(true, "Tiger");