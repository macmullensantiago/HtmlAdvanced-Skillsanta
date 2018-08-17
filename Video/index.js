var video = document.getElementById('video');

console.log(video.duration);




function play() {

    console.log(video.volume);

    // video.paused === true ? video.play() : video.pause();
    if (video.paused) {
        video.play();
    }

    console.log(video.paused);


    console.log(video.duration);

}


function pause() {
    video.pause();
}

function canplay() {
    console.log('can play this file');
}

function pauseFun(){
    console.log('Audio is paused');
}

function progressFun(){
    console.log('Audio loading inprogress');
}