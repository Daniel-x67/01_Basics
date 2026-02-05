console.log("How old are you ?");
let age = Number(prompt("Enter your age"));

if (age < 18) {
    console.log("You are young");
} else if (age > 25) {
    console.log("You are Middle-aged.");
} else if (age > 40) {
    console.log("You are old.");
}