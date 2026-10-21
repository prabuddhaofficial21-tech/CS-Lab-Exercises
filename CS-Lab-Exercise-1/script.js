
const currentHour = new Date().getHours();


const greetingElement = document.getElementById("greeting");

let greetingMessage = "";


if (currentHour < 12) {
    greetingMessage = "Good Morning";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon";
} else {
    greetingMessage = "Good Evening";
}


if (greetingElement) {
    greetingElement.textContent = greetingMessage;
}