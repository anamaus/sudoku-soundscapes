

$(function() {
    $(".slider").slider();
});
var slider = $('.slider');
slider.slider({
    min: 0,
    max: 100,
    value:50,
    range: "min",
    animate: true,
    slide: function(event, ui) {
        setVolume((ui.value) / 100);
    }
});





// variable to store HTML5 audio element
var music = document.getElementById('music');

function playAudio() {
    if (music.paused) {
        slider.fadeIn(1000).css('display','inline-block');
        music.play();
        $('#btnPlay').text("pause") ;
        music.setAttribute('loop', 'loop');
        setVolume(0.5);

    } else {
        music.pause();
        slider.css('display','none');
        $('#btnPlay').text("play");
    }
}


$('#btnPlay').click(function () {
    playAudio();


});


// function setVolume(volume) {
//     music.volume = volume;
// }
function setVolume(myVolume) {
    music.volume = myVolume;
}
