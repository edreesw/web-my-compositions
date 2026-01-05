/**
 * Music Player function
 * TODO: make a data obj to hold music info/links
 * generate music rows that will populate the player section with the audio link and info
 */

/**
 * Store music as objects, structured as follows:
 * 
 * @typedef {Object} Song
 * @property {string} title
 * @property {string} description
 * @property {string} link
 * @property {boolean} loop
 *
 */
 
const musicList = [
    {
        title: "Rising Waltz (2021, Musescore MIDI)",
        description: "My first serious attempt at writing something simple for the piano.",
        link: "./public/music/Rising_Waltz_MIDI_2021_forwebsite.mp3",
        loop: false
    },
    {
        title: "An October Haunting (2023)",
        description: "Wrote this in an attempt to come up with something October/Halloween themed.",
        link: "./public/music/AnOctoberHaunting_Oct2023_forwebsite.mp3",
        loop: false
    },
    {
        title: "Piano Orchestra Song (2023)",
        description: "Experimenting with an Orchestra plugin and writing in an odd time signature.",
        link: "./public/music/PianoOrchestraSong_2023_forwebsite.mp3",
        loop: false
    },
    {
        title: "Happy Tune (2023)",
        description: "Something I came up with while experimenting with recording my acoustic guitar.",
        link: "./public/music/HappyTune_2023_forwebsite.mp3",
        loop: false
    },
    {
        title: "Triumphant Loop",
        description: "Initial 4 bar idea was something I came up with in 2023 while playing around with an Orchestra plugin, and I added another 4 bars to make the loop in 2025.",
        link: "./public/music/TriumphantIdea_May2023July2025_forwebsite.mp3",
        loop: true
    },
];

const songMap = new Map(); 

function generateSongRows(songObjects) {
    const songListContainer = document.querySelector("#song-list"); 

    for(let i = 0; i < songObjects.length; i++) {
        songMap.set(songObjects[i].title, songObjects[i]);

        let songRow = document.createElement("div");

        songRow.innerHTML = songObjects[i].title; 
        songRow.addEventListener("click", updatePlayerAndPlay); 
        songRow.classList.add("song-row"); 

        songListContainer.appendChild(songRow); 
    }

    //initial load of player info with first song in list
    updatePlayer(songObjects[0]); 
}; 

function updatePlayerAndPlay() {
    const songObject = songMap.get(this.innerHTML); 

    updatePlayer(songObject); 

    playSong(); 
}

function updatePlayer(songObj) {
    const playerTitle = document.querySelector("#player-title"); 
    const playerSource = document.querySelector("#player-source");
    const playerDescription = document.querySelector("#player-description"); 
    const playerAudio = document.querySelector("#player-audio")

    playerTitle.innerHTML = songObj.title; 
    playerSource.src = songObj.link; 
    playerDescription.innerHTML = songObj.description; 
    playerAudio.loop = songObj.loop; 
}

function playSong() {
    const playerAudio = document.querySelector("#player-audio")
    playerAudio.pause(); 
    playerAudio.load(); 
    playerAudio.play(); 
}

//generate song list on page upon first load
console.log("HERE!"); 
generateSongRows(musicList); 