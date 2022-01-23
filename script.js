console.log("Witam Cię na mojej stronie");

let button = document.querySelector(".przycisk");
let brown = document.querySelector(".brown");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    brown.classList.toggle("light");

    if (brown.classList.contains("light")) {
        themeName.innerText = "ciemny";
    } else {
        themeName.innerText = "jasny";
    }
});

