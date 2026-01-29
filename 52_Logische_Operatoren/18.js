
let speed = Number(prompt("speed"));
let trafficLevel = Number(prompt("trafic level 1-10 :"));


if (speed > 80 || trafficLevel > 7) {
    console.log("Slow down!");
} else {
    console.log("You are good to go.");
}           