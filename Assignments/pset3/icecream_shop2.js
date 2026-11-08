const inventory = 200;
let conesSoldPerHour = 14;
for (let hour = 1; hour <= 12; hour++){
        print(conesSoldPerHour * hour + " sold at hour " + hour);
        print("Current Ice Cream Inventory: " + (inventory - (conesSoldPerHour * hour)) + " left");
        print("---");
    }