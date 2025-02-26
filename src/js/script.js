const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const sound = document.getElementById('sound');


playButton.addEventListener('click', function() {
    sound.play(); 
});


stopButton.addEventListener('click', function() {
    sound.pause(); 
    sound.currentTime = 0;
});