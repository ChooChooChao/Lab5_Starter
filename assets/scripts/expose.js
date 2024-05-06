// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // add the photo for the selected horn
  const imageToDisplay = document.querySelector("img");
  const selectHorn = document.getElementById("horn-select");

  selectHorn.addEventListener("change", (event) => {
    let horn = selectHorn.value;
    switch (horn) {
      case "air-horn":
        imageToDisplay.src = "assets/images/air-horn.svg";
        imageToDisplay.alt = "air-horn";
        break;
      case "car-horn":
        imageToDisplay.src = "assets/images/car-horn.svg";
        imageToDisplay.alt = "car-horn";
        break;
      case "party-horn":
        imageToDisplay.src = "assets/images/party-horn.svg";
        imageToDisplay.alt = "party-horn";
        break;
    }
  });
}