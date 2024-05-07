// explore.js
// resources: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

window.addEventListener("DOMContentLoaded", init);
const synth = window.speechSynthesis;

function init() {
  // populate the select options on page load
  let voices = [];
  const voiceSelect = document.querySelector("select");
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name + " (" + voices[i].lang + ")";
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const text = document.getElementById("text-to-speak");

  text.addEventListener("input", function() {
    text.value = this.value;
  });

  const toTalk = document.querySelector("button");
  
  toTalk.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        console.log(voices[i]);
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
  });
}