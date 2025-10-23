/*
freeCodeCamp - Daily Coding Challenges (10/22/2025) 

*Thermostat Adjuster 2*
Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, return a string indicating how to adjust the room temperature based on these constraints:

- Return "Heat: X degrees Fahrenheit" if the current temperature is below the target. With X being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 1 decimal place.
- Return "Cool: X degrees Fahrenheit" if the current temperature is above the target. With X being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 1 decimal place.
- Return "Hold" if the current temperature is equal to the target.

To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the result (F = (C * 1.8) + 32).
*/

function adjustThermostat(currentF, targetC) {
    const targetTempF = targetC * 1.8 + 32;

    if (currentF < targetTempF)
        return `Heat: ${(targetTempF - currentF).toFixed(
            1
        )} degrees Fahrenheit`;
    if (currentF > targetTempF)
        return `Cool: ${(currentF - targetTempF).toFixed(
            1
        )} degrees Fahrenheit`;
    return "Hold";
}

adjustThermostat(32, 0); // should return "Hold".
adjustThermostat(70, 25); // should return "Heat: 7.0 degrees Fahrenheit".
adjustThermostat(72, 18); // should return "Cool: 7.6 degrees Fahrenheit".
adjustThermostat(212, 100); // should return "Hold".
adjustThermostat(59, 22); // should return "Heat: 12.6 degrees Fahrenheit".
