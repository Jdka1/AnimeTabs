var song;


function preload() {
  songs = [loadSound('anime-ahh.mp3'), loadSound('anime-girl-senpai.mp3'), loadSound('ah-cute-anime-voice-sound-effect.mp3')];
  yamete = loadSound('yamede-kudasai-aaaaaahhh.mp3')
}

function play_random_sound() {
  random(songs).play()
}

function setup() {
  let num = 50;
  let interval = 300
  
  for (let i=0; i<num; i++) {
    setTimeout(() => {
      play_random_sound()
      window.open('https://www.google.com/search?q=anime+girls&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjW_d3U2ZD7AhVkMEQIHd1rBLEQ_AUoAXoECAEQAw&biw=1440&bih=821&dpr=2')
    }, i*interval);
  }
  setTimeout(() => {
    yamete.play();
      }, num*interval);
}
