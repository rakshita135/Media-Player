// initialising variables
let index = 1;
let audioElement = new Audio("");
let play = document.getElementById('play');
let myprogress = document.getElementById('myprogress');
myprogress.value = 0;
let songItemPlay= document.getElementById('songItemPlay');
let SongItems = Array.from(document.getElementsByClassName('num1'));

// array of all songs in playlist with cover photo and audiosrc
let songs = [
    {songName: "Zindagi Sawar du...", songPath:"Doraemon.mp3", coverPath:"doreamn1.png"},
    {songName: "Jab hum bade ho jayenge...", songPath:"Jab Hum Bade Ho Jayenge.mp3", coverPath:"doreamon2.jpg"},
    {songName: "Mai hu Jiyaan..", songPath:"mai hoon jiyan.mp3", coverPath:"https://i0.wp.com/www.returngiftwala.com/wp-content/uploads/2023/06/3-10.jpg?ssl=1"},
    {songName: "Jeene ka sahi dhang..", songPath:"Jeene Ka Sahi Dhang ! Doremon Song.mp3", coverPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqWORDyx4u3OL-vSK-UjZFPi00xCocU3CSQ&usqp=CAU"},
    {songName: "Sabse pehle hai pyaar..", songPath:"Sabse-Pehle-Hai-Pyar-Doraemon.mp3", coverPath:"https://m.media-amazon.com/images/M/MV5BYjY0MGNiM2QtY2Q3Ny00MzNkLWExODgtMmZhYzQ4NDA3YTkyXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"},
]


audioElement.src = songs[index-1].songPath;  //down palate par first song sabse pehle play karne ke liye

//down palate  play and pause audio manage
play.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
        console.log("hello");
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
   else{
    console.log('my name is rakshita.')
    audioElement.pause();
    play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
           
           })
   }})

   //to update progress bar
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value = progress;
    
    //to play song ek ke baad ek
    if(progress == 100){
        progress = 0;
        myprogress.value = progress;
        loop();
    }})

myprogress.addEventListener('change', ()=>{//song seek bar se aage badane ke liye
    audioElement.currentTime= parseInt((myprogress.value * audioElement.duration)/100);
})

SongItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

function makeallplay(){
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
 element.classList.remove('fa-pause');
 element.classList.add('fa-play');

})}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      if(audioElement.paused){ 
        console.log("hriosdf") ;
        makeallplay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        index = parseInt(e.target.id);
        audioElement.src = songs[index-1].songPath;
        audioElement.currentTime =0;
        changeimg();
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
      }

    //    element.addEventListener('click',(e)=>{
       else {
                console.log('hiiiiiiiiiii....')
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
                audioElement.pause();
                play.classList.remove('fa-pause');
                play.classList.add('fa-play');
                // return;
      }}
 ) })

// for previous and next btn
document.getElementById('previous').addEventListener('click',()=>{
    if(index ==1){
        index=5;
    }
    else{
        index= index - 1;
    }
    // index = parseInt(e.target.id);
            audioElement.src = songs[index-1].songPath;
            audioElement.currentTime = 0;
            audioElement.play();
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
            changeimg();
})

document.getElementById('next').addEventListener('click',()=>{
    if(index== 5){
        index=1 ;
}
else{
index = index + 1;
}
audioElement.src = songs[index-1].songPath;
            audioElement.currentTime = 0;
            audioElement.play();
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
            changeimg();
            
})
function changeimg(){

let changeimg = document.getElementById('coverimage');
changeimg.src = songs[index-1].coverPath;
}

function loop(){
    index++;
    audioElement.src = songs[index-1].songPath;
    audioElement.play();
    play.classList.remove('fa-play');
            play.classList.add('fa-pause');
}
function playnpause(){
    if(audioElement.played){

        // songItemPlay.classList.remove('fa-play');
        // songItemPlay.classList.add('fa-pause');
    }
}
function changebutton(){

}

