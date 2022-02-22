// THINGS I HAVE LEARNT
// 1. classList.add , classList.remove - For adding classes
// 2. play function
// 3. fa-pause , fa-play
// 4. try to use functions first
// 5. an array of objects
// 6. Different audio functions



let signal = document.querySelector("h3");
signal.style.display = "none";
let music = document.querySelector("audio");
let play = document.querySelector("#play");
let image = document.querySelector("img");
let musicName = document.querySelector("h1");
let artistName = document.querySelector("h2");
let counter = 0;
let playlist = [{
       name : `Tune Kaha`,
       artist : `Prateek Kuhad`,
       musicsrc : `tune kaha`
     },
   {
     name : `Tera Chehra`,
       artist : `Ankit Tiwari`,
       musicsrc : `tera chehra`
   },
   {
     name : `Tum Mile`,
     artist : `Javed Ali`,
     musicsrc : `tum mile`
   },
   {
     name : `Kasoor`,
     artist : `Prateek Kuhad`,
     musicsrc : `kasoor`
   }];
   const loadSongs = (playlist) =>
   {
     musicName.innerText = playlist.name;
     artistName.innerText = playlist.artist;
     music.src = `${playlist.musicsrc}.mp3`;
     image.src = `${playlist.musicsrc}.jpg`;  
   }
 loadSongs(playlist[counter]);
// first step --> Play , pause, next, previous
// PLAY PAUSE
function pauseMusic()
{
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  image.classList.remove("anime");
}
function playMusic()
{
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  // image.classList.add("colours");
  image.classList.add("anime");
}
let isPlay = false;
play.addEventListener("click", function () {
  if (isPlay == false) {
    isPlay=true;
    playMusic();
    
  } else {
    isPlay=false;
    pauseMusic();
    }
});

// NEXT PREVIOUS
image.classList.remove("anime");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

function nextSong()
{
  counter++;
  if(counter==4)
  {
    // signal.style.display = "block";
    counter=0;
  }
  loadSongs(playlist[counter]);
  playMusic();
  isPlay=true;
  
}

function prevSong()
{
  signal.style.display = "none";
  if(counter==0)
  {
  //  signal.style.display = "block";
  //  signal.innerText = `You have moved to the first song`;
  counter = 4;
  }
  counter--;
  loadSongs(playlist[counter]);
  playMusic();
  isPlay=true;
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

music.addEventListener("ended",function()
{
  if(counter==4)
  {
    counter=0;
  }
  else{
 counter++;
  }
  loadSongs(playlist[counter]);
  playMusic();
});





