// Functionality of the page should appear here

var openButton = document.getElementById("btn_modal");
var closeButton = document.getElementById("close_btn");
var modal = document.querySelector(".modal_container");

openButton.onclick = () => {
  modal.style.display = "flex";
};

closeButton.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
