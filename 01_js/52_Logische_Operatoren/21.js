
let heartate = Number(prompt("Enter your heart rate (bpm):"));
let age = Number(prompt("Enter your age:"));

if (age < 30 && heartrate < 100) {
    console.log("Light exercise");
} else if (age >= 30 && age <= 50 && heartrate >= 100 && heartrate <= 140) {
    console.log("Moderate exercise");
} else if (age > 50 || heartrate > 140) {
    console.log("Consult a doctor before exercising");
} 