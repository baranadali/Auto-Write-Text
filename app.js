const awText = "An automated post is being written here and it's very exciting to print it.";
let index = 0;
const timer = 150; // Time of writing in milliseconds.

function writeText() {
    document.body.innerText = awText.slice(0, ++index % awText.length);
}

setInterval(writeText, timer);
