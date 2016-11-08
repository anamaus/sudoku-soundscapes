
function setFieldsId(){
    var elements= document.querySelectorAll('.sudoku-col-1-9');

    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).attr('id', 'field' + i);
    }

}


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
                    el.text(game.fields[j].value).removeClass('active');
                }
                else if (game.fields[j].value === -1){
                    el.text('').addClass('sudoku-emptyField');
                }
                else if (game.fields[j].value !== -1){
                    el.addClass('sudoku-emptyField');
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

// var $body = $('body');
// var urlFlickr = "  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a3506587d55a2095e27653526bc980cc&tags=zen%2Cnature&per_page=10&page=2&format=json&nojsoncallback=1&auth_token=72157674647694012-af7be3509b6cddcb&api_sig=21efa29cb7b0200189845161817d7360";
// var pic=[];
// var $image;
// $.getJSON(urlFlickr, function (data) {
//     for (var i = 0; i < 11; i++) {
//         pic.push(data.photos.photo[i]) ;
//     }
//
//
// });
//
//
// //     .fail(function () {
// //     ...
// // })
//
//
// function getFlickrBg(){
//     for (var j = 0; j < pic.length; j++) {
//
//         var url = "https://farm" + pic[j].farm + ".staticflickr.com/" + pic[j].server + "/" + pic[j].id + "_" + pic[j].secret + ".jpg";
//         $image = $("<img class='bgimg' src='" + url + "' >");
//     }
//     $($body).append($image);
//         console.log(url);
//
// }
//
// function delayedBg() {
//     timeoutID = window.setTimeout(getFlickrBg(), 2000);
// }
//
// // var intervalID;
// //
// // function changeBackground() {
// //    intervalID = window.setInterval(getFlickrBg, 1000);
// // }
// // changeBackground() ;
// delayedBg();