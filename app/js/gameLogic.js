
// var DIFFICULTY = 0.5;
//
// function setDifficulty(newDifficulty){
//     DIFFICULTY = newDifficulty;
// }


//
// var solution.fields = [];
// for (var x = 0; x < 9; x++) {
//     for (var y = 0; y < 9; y++) {
//         solution.fields.push(new SudokuField(x, y, true));
//     }
//
// }

// function generateSolution() {
//
//     for (var i = 0; i < 9; i++) {
//         for (var j = 0; j < 9; j++) {
//             solution.fields[i*9 + j].value = Math.floor((i * 3 + i / 3 + j) % 9 + 1);
//         }
//     }
//
//
//     // for (var i = 0; i < solution.fields.length; i++) {
//     //
//     //     var randomValue;
//     //     var bool = true;
//     //
//     //     while (bool) {
//     //         randomValue = Math.floor(Math.random() * 9) + 1;
//     //         bool = false;
//     //         for (var j = 0; j < solution.fields.length; j++) {
//     //
//     //             // if (( solution.fields[i].x === solution.fields[j].x || solution.fields[i].y === solution.fields[j].y
//     //             //     || (Math.floor(solution.fields[i].x / 3) === Math.floor(solution.fields[j].x / 3) && Math.floor(solution.fields[i].y / 3) === Math.floor(solution.fields[j].y / 3)) )
//     //             //     && (solution.fields[j].value === randomValue)) {
//     //             //     bool = true;
//     //             //     break;
//     //             // }
//     //
//     //             if (solution.fields[i].x === solution.fields[j].x && solution.fields[j].value === randomValue) {
//     //                 bool = true;
//     //                 break;
//     //             }
//     //             if (solution.fields[i].y === solution.fields[j].y && solution.fields[j].value === randomValue) {
//     //                 bool = true;
//     //                 break;
//     //             }
//     //             // if((Math.floor(solution.fields[i].x / 3) === Math.floor(solution.fields[j].x / 3) && Math.floor(solution.fields[i].y / 3) === Math.floor(solution.fields[j].y / 3)) && (solution.fields[j].value === randomValue)){
//     //             //     bool = true;
//     //             //     break;
//     //             // }
//     //         }
//     //
//     //     }
//     //     solution.fields[i].value = randomValue;
//     //     console.log(randomValue);
//     // }
// }

// var game.fields = [];
//
// function generateGame(){
//     game.fields = [];
//     for (var x = 0; x < 9; x++) {
//         for (var y = 0; y < 9; y++) {
//             var randomDiffValue = Math.random();
//             if (randomDiffValue < DIFFICULTY) {
//                 game.fields.push(new SudokuField(x, y, false));
//             } else {
//                 game.fields[x*9 + y] = solution.fields[x*9 + y];
//
//             }
//         }
//     }
// }


//noob testing
function debugging(){
    console.log('solution.fields:');
    for (var i = 0; i < 9; i++) {
        console.log(solution.fields[i * 9].value + ' ' + solution.fields[i * 9 + 1].value + ' ' + solution.fields[i * 9 + 2].value + ' ' +
            solution.fields[i * 9 + 3].value + ' ' + solution.fields[i * 9 + 4].value + ' ' + solution.fields[i * 9 + 5].value + ' ' +
            solution.fields[i * 9 + 6].value + ' ' + solution.fields[i * 9 + 7].value + ' ' + solution.fields[i * 9 + 8].value + ' ');
        //  if (i % 9 === 0) console.log('\n');
    }
    console.log('game.fields:');
    for (var i = 0; i < 9; i++) {
        console.log(game.fields[i * 9].value + ' ' + game.fields[i * 9 + 1].value + ' ' + game.fields[i * 9 + 2].value + ' ' +
            game.fields[i * 9 + 3].value + ' ' + game.fields[i * 9 + 4].value + ' ' + game.fields[i * 9 + 5].value + ' ' +
            game.fields[i * 9 + 6].value + ' ' + game.fields[i * 9 + 7].value + ' ' + game.fields[i * 9 + 8].value + ' ');
        //  if (i % 9 === 0) console.log('\n');
    }
}