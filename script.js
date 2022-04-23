// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;
var languageCounter = 0; //keep track with language to display
var interval;

//Global Variables
var pattern =[2, 2, 4,7,3,2,1,8,2,1,6,7,5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var playerStrike = 0;

function randomPattern(){
    for(let i = 0; i < pattern.length;i++){
         pattern[i] = Math.floor(Math.random()*8)+1;
    }
}
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  playerStrike = 0;
  randomPattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}
function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
function changeLang(){
   if (languageCounter == 0){
       document.getElementById("Title").classList.add("hidden");
       document.getElementById("title2").classList.remove("hidden");
       document.getElementById("gameInstruction").classList.add("hidden");
       document.getElementById("gameInstruction2").classList.remove("hidden");
       document.getElementById("startBtn").innerHTML = "Comenzar";
       document.getElementById("stopBtn").innerHTML = "Detener";
       document.getElementById("langBtn").innerHTML = "English";
      languageCounter++;
   } else{
      document.getElementById("Title").classList.remove("hidden");
      document.getElementById("title2").classList.add("hidden");
      document.getElementById("gameInstruction").classList.remove("hidden");
      document.getElementById("gameInstruction2").classList.add("hidden");
      document.getElementById("startBtn").innerHTML = "Start";
      document.getElementById("stopBtn").innerHTML = "Stop";
      document.getElementById("langBtn").innerHTML = "Español";
     languageCounter--;
   } 
  
   
  
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 565.2,
  6: 700,
  7:200,
  8:150
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    document.getElementById("img"+btn).classList.remove("hidden");
  }
}
function stopTone(btn){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
  document.getElementById("img"+btn).classList.add("hidden");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
//  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
   
    delay += clueHoldTime 
    delay += cluePauseTime;
   
  }
   clueHoldTime = clueHoldTime - 20;
  
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//interval = setInterval(guess, 1000);


function guess(btn){

   
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  } 
  
   if(pattern[guessCounter] != btn){
       if(playerStrike == 2){
         loseGame();
      //  clearInterval(interval);
       
     }else{
       playerStrike++;
      //clearInterval(interval);
         
       
       
     }
      
   }else if (pattern[guessCounter] == btn){
      if(guessCounter == progress){
        if(progress < pattern.length-1){
           progress++;
           playClueSequence();
         // clearInterval(interval);
           
        }else{
           winGame();
        //   clearInterval(interval);
        }
      }else{
        guessCounter++;
      }
     
     
     
   }
  
}

