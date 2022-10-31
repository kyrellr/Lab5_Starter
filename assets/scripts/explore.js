// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  window.addEventListener('mouseover', populateVoiceList);

  function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.querySelector('select').appendChild(option);
    }
  }

  let button = document.querySelector('button');
  button.addEventListener('click', speak);

  function speak() {
    const voices = window.speechSynthesis.getVoices();
    let text = document.getElementById("text-to-speak");

    let speech = new SpeechSynthesisUtterance(text.value);
    const selectedOption = document.querySelector('select').selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        speech.voice = voices[i];
      }
    }

    window.speechSynthesis.speak(speech);
    let face = document.querySelector("img");
    face.src = "assets/images/smiling-open.png";
    
    speech.addEventListener('end', changeFace);
    function changeFace(){
      face.src = "assets/images/smiling.png";
    }
  }


}