var elements= document.querySelectorAll('.sudoku-col-4__text');



var difficulty = 0.5;
function setDifficulty(newDiff){
    difficulty = newDiff;
}



var sudokuSolution = [];
for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
        sudokuSolution.push(new SudokuField(x, y, true));
    }

}

function generateSolution() {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            sudokuSolution[i*9 + j].value = Math.floor((i * 3 + i / 3 + j) % 9 + 1);
        }
    }


    // for (var i = 0; i < sudokuSolution.length; i++) {
    //
    //     var randomValue;
    //     var bool = true;
    //
    //     while (bool) {
    //         randomValue = Math.floor(Math.random() * 9) + 1;
    //         bool = false;
    //         for (var j = 0; j < sudokuSolution.length; j++) {
    //
    //             // if (( sudokuSolution[i].x === sudokuSolution[j].x || sudokuSolution[i].y === sudokuSolution[j].y
    //             //     || (Math.floor(sudokuSolution[i].x / 3) === Math.floor(sudokuSolution[j].x / 3) && Math.floor(sudokuSolution[i].y / 3) === Math.floor(sudokuSolution[j].y / 3)) )
    //             //     && (sudokuSolution[j].value === randomValue)) {
    //             //     bool = true;
    //             //     break;
    //             // }
    //
    //             if (sudokuSolution[i].x === sudokuSolution[j].x && sudokuSolution[j].value === randomValue) {
    //                 bool = true;
    //                 break;
    //             }
    //             if (sudokuSolution[i].y === sudokuSolution[j].y && sudokuSolution[j].value === randomValue) {
    //                 bool = true;
    //                 break;
    //             }
    //             // if((Math.floor(sudokuSolution[i].x / 3) === Math.floor(sudokuSolution[j].x / 3) && Math.floor(sudokuSolution[i].y / 3) === Math.floor(sudokuSolution[j].y / 3)) && (sudokuSolution[j].value === randomValue)){
    //             //     bool = true;
    //             //     break;
    //             // }
    //         }
    //
    //     }
    //     sudokuSolution[i].value = randomValue;
    //     console.log(randomValue);
    // }
}

var sudokuGame = [];

function generateGame(){
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
           var randomDiffValue = Math.random();
           if (randomDiffValue < difficulty) {
                sudokuGame.push(new SudokuField(x, y, false));
           } else {
               sudokuGame[x*9 + y] = sudokuSolution[x*9 + y];

           }
        }
    }
}





(function () {


    generateSolution();
    generateGame();



// dinamically add id on html fields
    $(document).ready(function () {

        for (var i = 0; i < elements.length; i++) {
            $(elements[i]).attr('id', 'field' + i);
        }

    });

// show fields in html

    $(document).ready(function () {

        for (var i = 0; i < elements.length; i++) {

            var el = $(elements[i]);
            // var elId = el.attr('id');
            // var idSliced = elId.slice(5);


            for (var j = 0; j < sudokuGame.length; j++) {

                if (i === j) {

                    if (sudokuGame[j].isPartOfSolution !== false) {
                        el.text(sudokuGame[j].value);
                    }
                    else{
                        el.text('').attr('contentEditable','true');
                    }


                    break;
                }
            }

        }


    });















//noob testing

    console.log('sudokuSolution:');
    for (var i = 0; i < 9; i++) {
        console.log(sudokuSolution[i * 9].value + ' ' + sudokuSolution[i * 9 + 1].value + ' ' + sudokuSolution[i * 9 + 2].value + ' ' +
            sudokuSolution[i * 9 + 3].value + ' ' + sudokuSolution[i * 9 + 4].value + ' ' + sudokuSolution[i * 9 + 5].value + ' ' +
            sudokuSolution[i * 9 + 6].value + ' ' + sudokuSolution[i * 9 + 7].value + ' ' + sudokuSolution[i * 9 + 8].value + ' ');
        //  if (i % 9 === 0) console.log('\n');
    }
    console.log('sudokuGame:');
    for (var i = 0; i < 9; i++) {
        console.log(sudokuGame[i * 9].value + ' ' + sudokuGame[i * 9 + 1].value + ' ' + sudokuGame[i * 9 + 2].value + ' ' +
            sudokuGame[i * 9 + 3].value + ' ' + sudokuGame[i * 9 + 4].value + ' ' + sudokuGame[i * 9 + 5].value + ' ' +
            sudokuGame[i * 9 + 6].value + ' ' + sudokuGame[i * 9 + 7].value + ' ' + sudokuGame[i * 9 + 8].value + ' ');
        //  if (i % 9 === 0) console.log('\n');
    }


})();
