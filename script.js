document.addEventListener("DOMContentLoaded", function () {
    const greetButton = document.getElementById("greetButton");
    const nameInput = document.getElementById("name");
    const greeting = document.getElementById("greeting");

    greetButton.addEventListener("click", function () {
        const name = nameInput.value;
        greeting.textContent = "Hello, " + name + "!";
    });
});
