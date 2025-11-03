/*
freeCodeCamp - Daily Coding Challenges (09/18/2025) 

**Fill The Tank**
Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

- tankSize is the total capacity of the tank in gallons.
- fuelLevel is the current amount of fuel in the tank in gallons.
- pricePerGallon is the cost of one gallon of fuel.
- The returned value should be rounded to two decimal places in the format: "$d.dd".
*/

function costToFill(tankSize, fuelLevel, pricePerGallon) {
    if (fuelLevel > tankSize || tankSize < 0 || fuelLevel < 0 || pricePerGallon < 0) {
        return "Valores inválidos";
    }

    const remainingCapacity = (tankSize - fuelLevel);
    const totalCost = remainingCapacity * pricePerGallon;

    return `$${totalCost.toFixed(2)}`;
}

console.log(costToFill(20, 0, 4.00)) // should return "$80.00".
console.log(costToFill(15, 10, 3.50)) // should return "$17.50".
console.log(costToFill(18, 9, 3.25)) // should return "$29.25".
console.log(costToFill(12, 12, 4.99)) // should return "$0.00".
console.log(costToFill(15, 9.5, 3.98)) // should return "$21.89".