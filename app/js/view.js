
function setFieldsId(){
    var elements= document.querySelectorAll('.sudoku-col-1-9');

    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).attr('id', 'field' + i);
    }

}


function makeDifficultyButtonActive(difficultyBtn){
    $(difficultyBtn).addClass('active').siblings().removeClass('active');
}

// $("body").click(function(){
//     clearNumbers();
// });

// show fields in html
function drawAllFields() {
    var elements= document.querySelectorAll('.sudoku-col-1-9');

    for (var i = 0; i < elements.length; i++) {
        var el = $(elements[i]);
        el.removeClass('sudoku-emptyField');

        for (var j = 0; j < game.fields.length; j++) {
            if (i === j) {
                if (game.fields[j].isPartOfSolution) {
                    el.text(game.fields[j].value).removeClass('active');
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
function clearNumbers(){
    $numsOuter.css('display', 'none');
}

//flicker background image

var $body = $('body');
var urlFlickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b215d978e92b5f13ff2ec19118359a44&tags=nature%2Catmosphere%2Catmosphere%2Czen&tag_mode=all&extras=url_original&per_page=30&page=1&format=json&nojsoncallback=1';
var url;
var images=[];
var image;
var imageIndex= Math.floor(Math.random()*20);

// $.ajax(
//     {
//         type: 'GET',
//         url: urlFlickr
//     })
//     .done(function (data) {
//         for (var i = 0; i < 21; i++) {
//             var currentImage = data.photos.photo[i];
//             image = $("<img class='bgimg' src='https://farm" + currentImage.farm + ".staticflickr.com/" + currentImage.server + "/" + currentImage.id + "_" + currentImage.secret + ".jpg'>");
//             images.push(image);
//
//         }
//
//         $('.bgimg').attr('src', '');
//         $body.append(images[imageIndex]);
//
//     })
//     .fail(function () {
//         $body.append("<img class='bgimg' src='images/zen.jpg' >");
//         stopImages();
//         $('#btnResumeImages').attr('disabled','disabled');
//
//     });
//
//
//
//
//
// // change bg image after time
// var timer = setTimeout(changeImage, 3000);
// function appendImage() {
//     $('.bgimg').remove();
//     imageIndex= Math.floor(Math.random()*20);
//     images[imageIndex].hide().appendTo($body).fadeIn(1000);
// }
// function stopImages() {
//     clearTimeout(timer);
// }
//
//
// $('#btnStopImages').click(function(){
//     stopImages();
// });
// $('#btnResumeImages').click(function(){
//     clearTimeout(timer);
//     changeImage();
// });
//
// function changeImage() {
//     appendImage();
//     timer = setTimeout(changeImage, 3000);
// };


// var apiKey = '9h3sd8nn7n4h9b3jbw5vk5sn';
// $.ajax(
//     {
//         type:'GET',
//         url:"https://api.gettyimages.com:443/v3/search/images?fields=display_set%2Clicense_model%2Cmax_dimensions&file_types=jpg%2Cpng&page_size=30&phrase=zen%2C%20no%20people%2C%20horizontal%2C%20scenic%2C%20tranquility%2C%20tranquil%20scene&sort_order=most_popular",
//         beforeSend: function (request)
//         {
//             request.setRequestHeader("Api-Key", apiKey);
//         }})
//     .done(function(data){
//         for (var i = 0; i < data.images.length; i++) {
//             var currentImage = data.images[i];
//             url = currentImage.display_sizes[0].uri;
//             images.push($("<img class='bgimg' src='" + url + "' >"));
//         }
//    //when data arrives, remove init image src and set received data as src
//         $('.bgimg').attr('src','');
//         $body.append(images[0]);
//
//     })
//     .fail(function(){
//         $body.append("<img class='bgimg' src='images/zen.jpg' >");
//     });


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






//CLOSE PLAYER ON CLICK

var $player = $('.soundPlayer');
var $btnPlayer = $('#btnPlayer');
var $sudokuGrid =  $('.sudokuGrid');

$btnPlayer.click(function(){
    $sudokuGrid.toggleClass('sudokuGrid-toRight');
    $player.toggleClass('soundPlayer-closed');
    $btnPlayer.toggleClass('btnPlayerClosed');
    $btnPlayer.text() === ("❯") ? $btnPlayer.text("❮") : $btnPlayer.text("❯");
    return false;
});













// $('#btnMuteAll').click(function () {
//     for (var i = 0; i < allChannels.length; i++) {
//         if (allChannels[i].channel.playing()) {
//             allChannels[i].channel.playAudio();
//         }
//     }
// })
// ;

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
}

$('#btnMuteAll').click(function () {

    button.onClick();
})
;

var modalGameWon = document.getElementById('modalGameWon');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modalGameWon.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalGameWon.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target ==modalGameWon) {
        modalGameWon.style.display = "none";
    }
};


$('#modalPlayNewGame').click(function(){
    modalGameWon.style.display = "none";
    newGame();
});

$('#modalShowPlayer').click(function(){
    modalGameWon.style.display = "none";
    $sudokuGrid.removeClass('sudokuGrid-toRight');
    $player.removeClass('soundPlayer-closed');
    $btnPlayer.removeClass('btnPlayerClosed');
    $btnPlayer.text("❯");
});