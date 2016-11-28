function newGame() {
    solution.generateSolution();
    game.generateGame();
    drawAllFields();
    clearNumbers();
    debugging();

}


$(document).ready(function () {

    newGame();
    setFieldsId();
    makeDifficultyButtonActive('#btnNormal')
});

//$body.append("<img class='bgimg' src='images/zen.jpg' >");
//check if inserted value is part of solution and if so, make it look like those that are solved
// $('.sudoku-col-1-9')
//     .keyup(function () {
//         var insertedValue = $(this).text();
//         var elId = $(this).attr('id');
//         var index = elId.slice(5);
//
//         //check if entered value in the field matches to solution
//         game.setValue(index, parseInt(insertedValue));
//
//         drawAllFields();
//
//     });






//start new game on btn click
$("#btnNewGame").click(function () {
    newGame();
});


//set difficulty level by appropriate btn click
$(".setDifficultyLevel").on("click", '.btn', function (event) {
    event.preventDefault();
    if (this.id === 'btnEasy') {
        game.setDifficulty(0.3);
    }
    else if (this.id === 'btnNormal') {
        game.setDifficulty(0.5);
    }
    else if (this.id === 'btnHard') {
        game.setDifficulty(0.6);
    }
    makeDifficultyButtonActive(this);
    newGame();
});


//hint button function
$("#btnHint").click(function () {
        game.hint();
        drawAllFields();
          clearNumbers();

});



//handles click on number option

var $numsOuter = $("#numbers");
var $numSingle = $('.numbers__row__nums');
var insValue;
var elId;
var clickedField;
var x;
var y;
//upon clicking to an empty field, number options div appears right where it was clicked.

$('.sudoku-outer-grid')
    .on("click", '.sudoku-col-1-9', function (event) {

        x = event.pageX;
        y = event.clientY;

//if it's an empty field, show number options div for players to choose value from
        if ($(this).hasClass('sudoku-emptyField')) {
            clickedField = $(this);

//set position of number options div based on mouse click position
            if(screen.width>767) {
                $numsOuter.css({
                    'position': 'fixed',
                    'display': 'inline-block',
                    'left': (x -97) + 'px',
                    'top': (y -97) + 'px'

                });
            }
            else{
                $numsOuter.css({


                    'display': 'inline-block',
                    'left': 50 + '%',
                    'top': 50 + '%',
                    'transform':'translate(-50%, -50%)'
                });
            }
// set it as active field, until clicked on next one
            // clickedField.addClass('active').siblings().removeClass('active').parent().siblings().children().removeClass('active');
        }

        // else {
        //     clearNumbers();
        // }

    });

//choose a value from number options div
$numsOuter.on("click", $numSingle, function (event) {
    event.preventDefault();
    insValue = $(event.target).text();

  //get index from id
    elId = clickedField.attr('id');
    var index = elId.slice(5);

    //check if entered value in the field matches to solution
    game.setValue(index, parseInt(insValue));

   // clickedField.text(parseInt(insValue)).addClass('edited-field').removeClass('sudoku-emptyField');
    drawAllFields();
    clearNumbers();

});


// function hide_preloader() {
//     // To stop the preloader
//     rotate = 0;
//     // To apply Fade Out Effect to the Preloader
//     $("#preloader").hide();
// }
//
