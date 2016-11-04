function newGame() {
    solution.generateSolution();
    game.generateGame();
    drawAllFields();
    debugging();
}


$(document).ready(function () {

    newGame();
    setFieldsId();

});


//check if inserted value is part of solution and if so, make it look like those that are solved
$('.sudoku-col-1-9__text')
    .keyup(function () {
        var insertedValue = $(this).text();
        var elId = $(this).attr('id');
        var index = elId.slice(5);

        //check if entered value in the field matches to solution
        game.setValue(index, parseInt(insertedValue));

        drawAllFields();

    });


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
});


//hint button function
$("#btnHint").click(function () {
        game.hint();
        drawAllFields();

});

