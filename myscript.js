var x = document.getElementById("myAudio"); 
var y = false;

function playAudio() { 
  x.play(); 
} 

function stopAudio(){
    x.pause();
    x.currentTime = 0;
}

function setAudioState(){
    if(!y){
        playAudio();
        y=true;
    }
    else{
        stopAudio();
        y=false;
    }
}