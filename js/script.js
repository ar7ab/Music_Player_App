let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("ctrl-icon");
let controlIconDiv = document.getElementById("icon-div");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

controlIconDiv.onclick = function () {
    playPause();
};

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value;
    if (controlIcon.classList.contains("fa-play")) {
        playPause();
    }
};
