
function AudioChannel(channel, sliderId, btnId) {
    this.channel = channel;
    var thisChannel = this.channel;
    $(function () {
        $(sliderId).slider();
    });
    this.slider = $(sliderId);
    var thatSlider = this.slider;
    this.slider.slider({
        min: 0,
        max: 100,
        value: 50,
        range: "min",
        animate: true,
        slide: function (event, ui) {
            thisChannel.setVolume((ui.value) / 100);
        }
    });
    this.btnId = $(btnId);

    this.channel.setVolume = function (volume) {
        thisChannel.volume = volume;
    };
    this.channel.setVolume(0.5);

    this.channel.playAudio = function () {
        if (thisChannel.paused) {
            thatSlider.fadeIn(1000).css('display', 'inline-block');
            thisChannel.play();
            thisChannel.setAttribute('loop', 'loop');
        } else {
            thisChannel.pause();

            thatSlider.css('display', 'none');
        }
    };
    this.btnId.click(function () {


        thisChannel.playAudio();


    });
}



// variable to store HTML5 audio element
var channel1 = new AudioChannel(document.getElementById('audio1'), '#slider1', '#btnPlay1' );
var channel2 = new AudioChannel(document.getElementById('audio2'), '#slider2', '#btnPlay2' );
var channel3 = new AudioChannel(document.getElementById('audio3'), '#slider3', '#btnPlay3' );
var channel4 = new AudioChannel(document.getElementById('audio4'), '#slider4', '#btnPlay4' );
var channel5 = new AudioChannel(document.getElementById('audio5'), '#slider5', '#btnPlay5' );
var channel6 = new AudioChannel(document.getElementById('audio6'), '#slider6', '#btnPlay6' );
var channel7 = new AudioChannel(document.getElementById('audio7'), '#slider7', '#btnPlay7' );
var channel8 = new AudioChannel(document.getElementById('audio8'), '#slider8', '#btnPlay8' );
var channel9 = new AudioChannel(document.getElementById('audio9'), '#slider9', '#btnPlay9' );
var channel10 = new AudioChannel(document.getElementById('audio10'), '#slider10', '#btnPlay10' );

//
// channel1.channel.addEventListener('timeupdate', function(){
//     var buffer =.60;
//     if(this.currentTime > this.duration - buffer){
//         this.currentTime =5000;
//         this.play();
//     }}, false);
//
//
var sound = new Howl({
    src: ['sounds/ogg/white.ogg'],
    loop: true,
    volume: 0.5
});


  //sound.stop();

// $('#btnPlay1').click(function(){
//     sound.play();
// })