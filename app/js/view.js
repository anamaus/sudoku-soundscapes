
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
var urlFlickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0c4522b87604077fb92c17f638de688b&tags=tranquility%2Catmosphere%2Czen&tag_mode=all&per_page=30&page=1&format=json&nojsoncallback=1&auth_token=72157674832712021-4fcf38e747c7277d&api_sig=44900c313125a1f05f76813266baaa26';
var url;
var images=[];
var image;
//
// $.getJSON(urlFlickr, function (data) {
//     for (var i = 0; i < 3; i++) {
//         var currentImage = data.photos.photo[i];
//         image = $("<img class='bgimg' src='https://farm" + currentImage.farm + ".staticflickr.com/" + currentImage.server + "/" + currentImage.id + "_" + currentImage.secret + ".jpg'>");
//         images.push(image);
//         console.log(image);
//     }
//
//      $body.append(images[0]);
// })
//     .fail(function () {
//         console.log('ne');
//     })
// ;
$.ajax(
    {
        type:'GET',
        url:urlFlickr})
    .done(function(data){
        for (var i = 0; i < 21; i++) {
            var currentImage = data.photos.photo[i];
            image = $("<img class='bgimg' src='https://farm" + currentImage.farm + ".staticflickr.com/" + currentImage.server + "/" + currentImage.id + "_" + currentImage.secret + ".jpg'>");
            images.push(image);

        }

        $('.bgimg').attr('src','');
        $body.append(images[5]);

    })
    .fail(function(){
        $body.append("<img class='bgimg' src='images/zen.jpg' >");
    });
// change bg image after time
var timer = setTimeout(changeImage, 3000);
function appendImage() {
    $('.bgimg').remove();
    var x =Math.floor(Math.random()*20);
    images[x].hide().appendTo($body).fadeIn(1000);
}
function stopImages() {
    clearTimeout(timer);
}


$('#btnStopImages').click(function(){
    stopImages();
});
$('#btnResumeImages').click(function(){
    clearTimeout(timer);
    changeImage();
});

function changeImage() {
    appendImage();
    timer = setTimeout(changeImage, 3000);
};

console.log(images);

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