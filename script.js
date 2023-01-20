console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: 'Warriyo - Mortals', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Tenu-vekh-vekh-pyar-kardi', filePath: 'D:\lovely\songs\Tenu_Vekh_Vekh_Pyar_Kardi__Latest_Punjabi_Love_Story__Latest_Punjabi_Song_2019__Tenu_Pyar_Kardi(128k).mp3', coverPath: 'covers/2.jpg'},
    {songName: 'me-Dekhu-teri-photo', filePath: 'D:\lovely\songs\Luka_Chuppi__Photo_Song_Main_Dekhu_Teri_Photo_So_so_Bar_Kude_Full_Video_Kartik,Kirti__2019(128k).mp3', coverPath: 'covers/3.jpg'},
    {songName: 'kya-Bat-ay', filePath: 'D:\lovely\songs\Kya_Baat_Ay.mp3', coverPath: 'covers/4.jpg'},
    {songName: 'Kabhi-jo-Badal-Barse', filePath: 'D:\lovely\songs\Kabhi_Jo_Baadal_Barse.mp3', coverPath: 'covers/5.jpg'},
    {songName: 'Enna-sona', filePath: 'D:\lovely\songs\Enna+Sona+-+Full+Song++Shraddha++Aditya++A.R.+Rahman++Arijit+Singh.mp3', coverPath: 'covers/6.jpg'},
    {songName: 'Dil-Diya-gallan', filePath: 'D:\lovely\songs\Dil_Diyan_Gallan_Song__Tiger_Zinda_Hai__Salman_Khan,_Katrina_Kaif__Atif,_Vishal_&_Shekhar,_Irshad(128k).mp3', coverPath: 'covers/7.jpg'},
    {songName: 'Ban-Kar-Hawa', filePath: 'D:\lovely\songs\Ban+Kar+Hawa++Full+Song++New+Hindi+Song+2018++Sad+Romantic+Song+Ashiwini+BhardwajKhushbu+Sharma.mp3', coverPath: 'covers/8.jpg'},
    {songName: 'Tera-Ban-Jaunga', filePath: 'D:\lovely\songs\__Tera_Ban_Jaunga__Shahid_K,_Kiara_A,_Sandeep_V__Tulsi_Kumar,_Akhil_Sachdeva__Kumaar(128k).mp3', coverPath: 'covers/9.jpg'},
    {songName: 'Vaaste', filePath: 'D:\lovely\songs\Vaaste_Song_Dhvani_Bhanushali,_Tanishk_Bagchi__Nikhil_D__Bhushan_Kumar__Radhika_Rao,_Vinay_Sapru(128k).mp3', coverPath: 'covers/10.jpg'},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})