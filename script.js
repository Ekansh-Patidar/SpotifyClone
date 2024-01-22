console.log("Welcome to spotify")
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
    {songname: "Salaam-e-Ishq", filePath:"songs/1.mp3", coverPath: "1.jpg"},
]

// handle play/pause 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) /100;
})

