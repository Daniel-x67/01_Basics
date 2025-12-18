console.log("What Temperature ist outside ?");
let temperature = Number(prompt("Enter the Temperature"));

if (temperature < 0) {
    console.log("Stay inside.");
} else if (temperature < 15) {
    console.log(" Dress warm up.");
} else if (temperature < 25) {
    console.log("Go outside.");
} else if (temperature > 30) {
    console.log(" Go bathing.");
} else {
    console.log(" Go in to the frezzer .");
}