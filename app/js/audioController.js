

function AudioChannel(channelSrc1,channelSrc2, sliderId, btnId) {
    this.channel =  new Howl({
        src: [channelSrc1,channelSrc2],
        loop : true

});
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
            thisChannel.volume((ui.value) / 100);
        }
    });
    this.btnId = $(btnId);


    this.channel.volume(0.5);

    //kad je kanal ukljucen i pritisnuto dugme muteAll, kanal je vidljiv ali bez zvuka
    this.isMuted =false;
    var muted = this.isMuted;
    this.channel.playAudio = function () {

        if (!thisChannel.playing()) {
            thatSlider.fadeIn(1000).css('opacity', '1');


                thisChannel.play();

        }
        else {
            thisChannel.stop();
            thatSlider.css('opacity', '0');
        }
    };

    this.btnId.click(function () {
        if(!button.isMuted) {
            thisChannel.playAudio();
        }

    });
}



// variable to store HTML5 audio element
var channel1 = new AudioChannel('sounds/ogg/rain.ogg', 'sounds/aac/rain.m4a', '#slider1', '#btnPlay1' );
var channel2 = new AudioChannel('sounds/ogg/thunderLight.ogg','sounds/aac/thunderLight.m4a', '#slider2', '#btnPlay2' );
var channel3 = new AudioChannel('sounds/ogg/birds.ogg','sounds/aac/birds.m4a', '#slider3', '#btnPlay3' );
var channel4 = new AudioChannel('sounds/ogg/river.ogg', 'sounds/aac/river.m4a','#slider4', '#btnPlay4' );
var channel5 = new AudioChannel('sounds/ogg/beach.ogg', 'sounds/aac/beach.m4a','#slider5', '#btnPlay5' );
var channel6 = new AudioChannel('sounds/ogg/fire.ogg', 'sounds/aac/fire.m4a','#slider6', '#btnPlay6' );
var channel7 = new AudioChannel('sounds/ogg/night.ogg', 'sounds/aac/night.m4a','#slider7', '#btnPlay7' );
var channel8 = new AudioChannel('sounds/ogg/white.ogg','sounds/aac/white.m4a', '#slider8', '#btnPlay8' );
var channel9 = new AudioChannel('sounds/ogg/train.ogg', 'sounds/aac/train.m4a','#slider9', '#btnPlay9' );
var channel10 = new AudioChannel('sounds/ogg/chimes.ogg', 'sounds/aac/chimes.m4a','#slider10', '#btnPlay10' );



var allChannels = [];
allChannels.push(channel1,channel2,channel3,channel4,channel5,channel6,channel7,channel8,channel9,channel10);



















//
// function AudioChannel(channel, sliderId, btnId) {
//     this.channel = channel;
//     var thisChannel = this.channel;
//     $(function () {
//         $(sliderId).slider();
//     });
//     this.slider = $(sliderId);
//     var thatSlider = this.slider;
//     this.slider.slider({
//         min: 0,
//         max: 100,
//         value: 50,
//         range: "min",
//         animate: true,
//         slide: function (event, ui) {
//             thisChannel.setVolume((ui.value) / 100);
//         }
//     });
//     this.btnId = $(btnId);
//
//     this.channel.setVolume = function (volume) {
//         thisChannel.volume = volume;
//     };
//     this.channel.setVolume(0.5);
//
//     this.channel.playAudio = function () {
//         if (thisChannel.paused) {
//             thatSlider.fadeIn(1000).css('display', 'inline-block');
//             thisChannel.play();
//             thisChannel.setAttribute('loop', 'loop');
//         } else {
//             thisChannel.pause();
//
//             thatSlider.css('display', 'none');
//         }
//     };
//     this.btnId.click(function () {
//
//
//         thisChannel.playAudio();
//
//
//     });
// }
//
//
//
// // variable to store HTML5 audio element
// var channel1 = new AudioChannel(document.getElementById('audio1'), '#slider1', '#btnPlay1' );
// var channel2 = new AudioChannel(document.getElementById('audio2'), '#slider2', '#btnPlay2' );
// var channel3 = new AudioChannel(document.getElementById('audio3'), '#slider3', '#btnPlay3' );
// var channel4 = new AudioChannel(document.getElementById('audio4'), '#slider4', '#btnPlay4' );
// var channel5 = new AudioChannel(document.getElementById('audio5'), '#slider5', '#btnPlay5' );
// var channel6 = new AudioChannel(document.getElementById('audio6'), '#slider6', '#btnPlay6' );
// var channel7 = new AudioChannel(document.getElementById('audio7'), '#slider7', '#btnPlay7' );
// var channel8 = new AudioChannel(document.getElementById('audio8'), '#slider8', '#btnPlay8' );
// var channel9 = new AudioChannel(document.getElementById('audio9'), '#slider9', '#btnPlay9' );
// var channel10 = new AudioChannel(document.getElementById('audio10'), '#slider10', '#btnPlay10' );

//
// channel1.channel.addEventListener('timeupdate', function(){
//     var buffer =.60;
//     if(this.currentTime > this.duration - buffer){
//         this.currentTime =5000;
//         this.play();
//     }}, false);
//
//
