console.log("welcome to music adda")
//initialize the variables
let songIndex=0;
var audio = new Audio('./1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myprogressbar= document.getElementById('myprogressBar');
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');

let songitem =Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Kesariya",filePath: "1.mp3" ,coverPath :"cover1.png" },
    {songName:"Excuses",filePath: "2.mp3" ,coverPath :"cover2.png" },
    {songName:"Dhoka",filePath: "3.mp3" ,coverPath :"cover3.png" },
    {songName:"Brown munde",filePath: "4.mp3" ,coverPath :"cover4.png" },
    {songName:"arabic kuthu",filePath: "5.mp3" ,coverPath :"cover5.png" },
    {songName:"duniya",filePath: "6.mp3" ,coverPath :"cover6.png" },
    {songName:"kabhi jo badal",filePath: "7.mp3" ,coverPath :"cover7.png" },
    {songName:"let me down slowly ",filePath: "8.mp3" ,coverPath :"cover8.png" },
    {songName:"lambiyan si judiyaan",filePath: "9.mp3" ,coverPath :"cover9.png" },
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;

})

masterPlay.addEventListener('click', ()=>{
    if(audio.paused ||audio.currentTime<=0){
        audio.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    
})
//listen to event
audio.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress =parseInt((audio.currentTime/audio.duration)*100);
   // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audio.currentTime=myprogressbar.value*audio.duration/100;
   
 
})

const makeallplays =() =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); 
    })
    

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio.src =`${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audio.currentTime=0;
        audio.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audio.src =`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audio.play();
    audio.currentTime=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audio.src =`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

