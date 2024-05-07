// explore.js

window.addEventListener("DOMContentLoaded", init);
const synth = window.speechSynthesis;

function init() {
  // populate the select options on page load
  let voice = [];
  const voiceSelect = document.querySelector("select");
  
  function populateVoiceList() {
    voice = synth.getVoices();
  
    for (let i = 0; i < voice.length; i++) {
      const option = document.createElement("option");
      option.textContent = voice[i].name + " (" + voice[i].lang + ")";
  
      if (voice[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voice[i].lang);
      option.setAttribute("data-name", voice[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}