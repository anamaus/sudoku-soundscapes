


//dynamically sets ID's on fields depending on their position in array
function setFieldsId(){
    var elements= document.querySelectorAll('.sudoku-col-1-9');
    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).attr('id', 'field' + i);
    }
}

//difficulty lvl button gets class active when active
function makeDifficultyButtonActive(difficultyBtn){
    $(difficultyBtn).addClass('active').siblings().removeClass('active');
}


// show fields in html
function drawAllFields() {
    var elements= document.querySelectorAll('.sudoku-col-1-9');

    for (var i = 0; i < elements.length; i++) {
        var el = $(elements[i]);
        el.removeClass('sudoku-emptyField');

        for (var j = 0; j < game.fields.length; j++) {
            if (i === j) {
                if (game.fields[j].isPartOfSolution) {
                    el.text(game.fields[j].value).removeClass('edited-field');
                }
                else if (game.fields[j].value === -1){
                    el.text('').addClass('sudoku-emptyField');
                }
                else if (game.fields[j].value !== -1){
                    el.text(game.fields[j].value).addClass('sudoku-emptyField');
                }
                break;
            }
        }

    }
}

// closes number options div
function clearNumbers(){
    $numsOuter.css('display', 'none');
}

//when clicked anywhere but on empty field, number options div closes
// $('body  *').on("click", function (event) {
//     var target = $(event.target);
//     if (target.hasClass('sudoku-emptyField') === false) {
//         if ($("#numbers").css('display') !== 'none') {
//             clearNumbers();
//         }
//     }
// });
//CLOSE PLAYER ON CLICK

var $player = $('.soundPlayer');
var $btnPlayer = $('#btnPlayer');
var $sudokuGrid =  $('.sudokuGrid');
var $muteBtn =  $('.btnMuteAll');

$btnPlayer.click(function(){
    $sudokuGrid.toggleClass('sudokuGrid-toRight');
    $player.toggleClass('soundPlayer-closed');
    $btnPlayer.toggleClass('btnPlayerClosed');
    $btnPlayer.text() === ("❯") ? $btnPlayer.text("❮") : $btnPlayer.text("❯");
    $muteBtn.toggleClass('btnMuteAllClosed');
    return false;
});


//change mute icon when clicked
$muteBtn.click(function(){
    $('.btnMuteAll span').attr('class') === ("icon-music") ? $('.btnMuteAll span').attr('class','icon-crossmusic2') : $('.btnMuteAll span').attr('class', 'icon-music');
});


//when clicked on mute btn,player stops playing and cant open new until clicked again. clicking again unmutes player
var button = {
    isMuted: false,
    onClick: function(){
        this.isMuted = !this.isMuted;
        for (var i = 0; i < allChannels.length; i++) {

            if (allChannels[i].channel.playing()) {
                allChannels[i].channel.pause();
                allChannels[i].isMuted = true;

            }
            else if ( !allChannels[i].channel.playing()){
                if(allChannels[i].isMuted){
                    allChannels[i].channel.play();
                    allChannels[i].isMuted = false;
                }
            }
        }
    }
};

$('#btnMuteAll').click(function () {

    button.onClick();
})
;


//MODALS

// Get the modal
var modalHowToPlay = document.getElementById('howToPlayModal');

// Get the button that opens the modal
var btn = document.getElementById("instructionsBtn");

// Get the <span> element that closes the modal
var span0 = document.getElementById("close1");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modalHowToPlay.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    modalHowToPlay.style.display = "none";
};




var modalGameWon = document.getElementById('modalGameWon');

// Get the <span> element that closes the modal
var span1 = document.getElementById("close2");


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modalGameWon.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target ==modalGameWon )|| (event.target ==modalHowToPlay)) {
        modalGameWon.style.display = "none";
        modalHowToPlay.style.display = "none";
    }
};

//when clicked, modal closes and new game starts
$('#modalPlayNewGame').click(function(){
    modalGameWon.style.display = "none";
    newGame();
});

//when clicked on modal button close modal and show player
$('#modalShowPlayer').click(function(){
    modalGameWon.style.display = "none";
    $sudokuGrid.removeClass('sudokuGrid-toRight');
    $player.removeClass('soundPlayer-closed');
    $btnPlayer.removeClass('btnPlayerClosed');
    $btnPlayer.text("❯");
});


//Handles color picker

var $colorPicker = $('.color-picker');

function changeCss(css){
    var newCss = $('#mainStylesheet');
    newCss.attr('href',css);
    $colorPicker.removeClass('color-picker--isOpen');
}

$colorPicker.on("click", '.colors', function (event) {
    event.preventDefault();
    if (this.id === 'color-picker__color__blue') {
        changeCss('css/style.css');
    }
    else if (this.id === 'color-picker__color__dust-rose') {
        changeCss('css/themes/dust-rose.css')
    }
    else if (this.id === 'color-picker__color__green') {
        changeCss('css/themes/green.css')
    }
    else if (this.id === 'color-picker__color__grey') {
        changeCss('css/themes/grey.css')
    }
    else if (this.id === 'color-picker__color__lavender') {
        changeCss('css/themes/lavender.css')
    }
    else if (this.id === 'color-picker__color__peach') {
        changeCss('css/themes/peach.css')
    }
    else if (this.id === 'color-picker__color__purple') {
        changeCss('css/themes/purple.css')
    }
    else if (this.id === 'color-picker__color__red') {
        changeCss('css/themes/red.css')
    }
    else if (this.id === 'color-picker__color__turquoise') {
        changeCss('css/themes/turquoise.css')
    }
    else if (this.id === 'color-picker__icon') {
        $colorPicker.toggleClass('color-picker--isOpen');
    }

});




//fixed bar on bottom changes botom pos when it comes to footer and stays above footer
$(window).scroll(function(event) {

    var scroll = $(this).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var footerHeight = $('.footer').height();

    if(docHeight - (windowHeight + scroll) <= footerHeight) {
        $('.social-buttons__small').css({
            bottom: footerHeight - (docHeight - (windowHeight + scroll))
        });
    } else {
        $('.social-buttons__small').css({
            bottom: 0
        });
    }

});




