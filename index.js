const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");//by default, audio src is "a"tune


const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();//playing an audio
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);;//getting clicked key elements
  clickedKey.classList.add("active"); //adafter  adding active class  after 150  ms form the clicked key element 
  setTimeout(() =>{
    clickedKey.classList.remove("active");//adafter  adding active class  after 150  ms form the clicked key element 
  }, 150)
}


pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)//adding data-key value to the allkeys array
    //calling playtune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    
}); 

const handleVolume = (e) =>{
    audio.volume=e.target.value;//passing range slider value as an audio volume
}
const showHideKeys =  () => {
    //toggling hide class form each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {  
    //if the pressed key is the all key array, only call the play tune function
   if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);


