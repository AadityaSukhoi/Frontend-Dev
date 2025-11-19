// Q5. Weather Activity Planner
// Advise a user on what to do based on temperature, rain, and wind speed.
// Requirements:
// ● Create variables for temperature, isRaining, windSpeed.
// ● If raining → “Stay indoors with hot coffee.”
// ● Else if temperature > 35 → “Go swimming.”
// ● Else if temperature < 15 and windSpeed > 20 → “Too cold and windy — stay home.”
// ● Else → “Perfect day for a walk.”
// ● Combine && and || conditions smartly.

const temperature = 28;
const isRaining = false;
const windSpeed = 12;

console.log("===== WEATHER ACTIVITY PLANNER =====\n");

console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("------------------------------------");

let advice;

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} 
else if (temperature > 35) {
    advice = "Go swimming.";
} 
else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} 
else {
    advice = "Perfect day for a walk.";
}

console.log(`Advice: ${advice}`);
console.log("====================================");