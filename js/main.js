let paragraph = document.querySelector("#opis");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    paragraph.innerText = "Tekst dodany prawidłowo!";
});
