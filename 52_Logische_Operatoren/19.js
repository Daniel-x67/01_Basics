

let grade = Number(prompt("Enter your grade (0-100):"));

let attendance = Number(prompt("Enter your atendance percentage (0-100):"));

let extraCredit = Number(prompt("Enter your extra credit points (0-10):"));                     

if (grade >= 80 && (attendance >= 90 || extraCredit >= 5)) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}