//flicker background image
//
// var $body = $('body');
// var urlFlickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b215d978e92b5f13ff2ec19118359a44&tags=nature%2Catmosphere%2Catmosphere%2Czen&tag_mode=all&extras=url_original&per_page=30&page=1&format=json&nojsoncallback=1';
// var url;
// var images=[];
// var image;
// var imageIndex= Math.floor(Math.random()*20);

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









