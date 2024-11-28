// Select all buttons with the class 'btn_modal' and all modal containers
const openButtons = document.querySelectorAll(".btn_modal");
const closeButtons = document.querySelectorAll(".close_btn");
const modals = document.querySelectorAll(".modal_container");

openButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].classList.add("show_modal");
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].classList.remove("show_modal");
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show_modal");
    }
  });
});
