const facts = [
    "I study Software Engineering and enjoy building small projects.",
    "Badminton is one of my favorite sports.",
    "I enjoy football because teamwork makes the game exciting.",
    "Online gaming is one of my favorite ways to relax."
];

const factButton = document.getElementById("factButton");
const factText = document.getElementById("factText");

if (factButton && factText) {
    factButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[randomIndex];
    });
}
