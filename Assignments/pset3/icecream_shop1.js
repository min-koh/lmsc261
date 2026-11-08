let priceOfIceCream = 5;
let paymentRecieved = prompt("It's 5$, How much you can pay for ice cream?");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;

if(isPaymentEnough){
    print("Thanks! Enjoy the Ice Cream!");
    print("Change :" + (paymentRecieved - priceOfIceCream) + "$");
    }
else{
    print("Not enough cash!");
    }

