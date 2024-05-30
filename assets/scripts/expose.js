// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // add the photo for the selected horn
  const imageToDisplay = document.querySelector("img");
  const audioToPlay = document.querySelector("audio");
  const selectHorn = document.getElementById("horn-select");

  selectHorn.addEventListener("change", (event) => {
    let horn = selectHorn.value;
    switch (horn) {
      case "air-horn":
        imageToDisplay.src = "assets/images/air-horn.svg";
        imageToDisplay.alt = "air-horn";
        audioToPlay.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        imageToDisplay.src = "assets/images/car-horn.svg";
        imageToDisplay.alt = "car-horn";
        audioToPlay.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        imageToDisplay.src = "assets/images/party-horn.svg";
        imageToDisplay.alt = "party-horn";
        audioToPlay.src = "assets/audio/party-horn.mp3";
        break;
    }
  });

  // handle the slider value changes
  const sliderValue = document.getElementById("volume");
  const sliderImage = document.querySelector("img[alt='Volume level 2'");

  
  sliderValue.addEventListener("input", (event) => {
    if (sliderValue.value == 0) {
      sliderImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (sliderValue.value < 33) {
      sliderImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (sliderValue.value < 67) {
      sliderImage.src = "assets/icons/volume-level-2.svg";
    }
    else {
      sliderImage.src = "assets/icons/volume-level-3.svg";
    }

    audioToPlay.volume = sliderValue.value / 100;
  });

  // play sound button
  const playSound = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  playSound.addEventListener("click", (event) => {
    audioToPlay.play();
    if (selectHorn.value == "party-horn") {
      jsConfetti.addConfetti();
      
    }
  });
}

