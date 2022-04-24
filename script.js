{
    const welcome = () => {
        console.log("Witam Cię na mojej stronie");
    }

    const toogleBackground = () => {
        const brown = document.querySelector(".brownBox");
        const themeName = document.querySelector(".themeName");

        brown.classList.toggle("light");
        themeName.innerText = brown.classList.contains("jasny" ? "ciemny" : "jasny");
    };

    const init = () => {
        const onChangeBackgroundButton = document.querySelector(".js-button");


        onChangeBackgroundButton.addEventListener("click", toogleBackground);
        welcome();
    };

    init();
}