// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  window.addEventListener('input',onChange);

  let horn = document.getElementById("horn-select");
  let hornImg = document.querySelector("img");
  let aud = document.querySelector("audio");

  let vol = document.getElementById("volume");
  let img = document.querySelector("div img");

  function onChange() {
    if (horn.value == "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";
    }
    else if (horn.value == "car-horn"){
      hornImg.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    }
    else if (horn.value == "party-horn") {
      hornImg.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    } 
    

    if (vol.value == 0){
      img.src = "assets/icons/volume-level-0.svg";
    }
    else if (vol.value >= 1 && vol.value < 33){
      img.src = "assets/icons/volume-level-1.svg";
    }
    else if (vol.value >= 33 && vol.value < 67){
      img.src = "assets/icons/volume-level-2.svg";
    }
    else if (vol.value >= 67){
      img.src = "assets/icons/volume-level-3.svg";
    }

    aud.volume = vol.value/100;
  }


  const jsConfetti = new JSConfetti(document.body);
  let playButton = document.querySelector("button");
  playButton.addEventListener('click',onClick);


  function onClick() {
    
    if (horn.value == "party-horn"){
      jsConfetti.addConfetti({
        confettiColors: [
          'red','black','yellow','blue','#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
    }
    
    aud.play();
  }


}