import './scss/app.scss';

const addButton = document.querySelector(".aside__button_add");
const modal = document.querySelector(".modal");

addButton.addEventListener("click", () => {
    modal.classList.add("modal_visible");
});

modal.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target.classList);
    if (event.target.classList.contains("modal")) {
        modal.classList.remove("modal_visible");
    }
})
