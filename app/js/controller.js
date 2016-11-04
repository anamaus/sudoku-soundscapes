function newGame() {
    solution.generateSolution();
    game.generateGame();
    drawAllFields();
    debugging();
}


$(document).ready(function () {

    newGame();
    setFieldsIds();

});


//check if inserted value is part of solution and if so, make it look like those that are solved
$('.sudoku-col-1-9__text')
    .keyup(function () {
    var insertedValue = $(this).text();
    var elId = $(this).attr('id');
    var index = elId.slice(5);

    //check if entered value in the field matches to solution
    game.fields[index].value = parseInt(insertedValue);
    if (parseInt(insertedValue) === solution.fields[index].value) {
        game.fields[index] = solution.fields[index];
        drawAllFields();
    }
    // check if all fields are correctly inserted
    var win = true;
    for (var j = 0; j < 81; j++) {

        if (game.fields[j].value !== solution.fields[j].value) {
            win = false;
            break;

        }

    }
    if (win) {
        console.log("win");
    }


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
    var index = Math.floor(Math.random() * 80);
    for (var i = index; i < index + 81; i++) {
        console.log('i mod 81 = ' + i % 81);
        if (!game.fields[i % 81].isPartOfSolution) {
            game.fields[i % 81] = solution.fields[i % 81];
            drawAllFields();
            break;
        }

    }
});

