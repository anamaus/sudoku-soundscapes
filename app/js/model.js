function SudokuField(x,y, isPartOfSolution) {
    this.x =x;
    this.y =y;
    this.isPartOfSolution = isPartOfSolution;
    this.value = -1;
    this.setValue = function (value) {


            if ((value < 1) || (value > 9)) {
                return false;
            }
            else {
                this.value = value;
            }

    };

}





function Game(solution){
    this.fields = [];
    this.solution= solution;
    this.difficulty = 0.1;

    this.generateGame = function(){
       this.fields = [];
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                var randomDiffValue = Math.random();
                if (randomDiffValue < this.difficulty) {
                    this.fields[x*9 + y] = new SudokuField(x, y, false);
                } else {
                    this.fields[x*9 + y] = this.solution.fields[x*9 + y];

                }
            }
        }
    };

    this.setDifficulty = function(newDifficulty){
        this.difficulty = newDifficulty;
    };

    this.isGameOver = function(){
        var win = true;
        for (var j = 0; j < 81; j++) {

            if (this.fields[j].value !== this.solution.fields[j].value) {
                win = false;
                break;
            }

        }
        if (win) {
            modalGameWon.style.display = "block";
            console.log("win");
        }
    };

    this.hint = function(){
        var index = Math.floor(Math.random() * 80);
        for (var i = index; i < index + 81; i++) {
           //  console.log('i mod 81 = ' + i % 81);
            if (!this.fields[i % 81].isPartOfSolution) {
                this.fields[i % 81] = this.solution.fields[i % 81];
                break;
            }

        }
        this.isGameOver();
    };

    this.setValue = function(index, value){
       this.fields[index].value = value;
        //TODO promeniti logiku da ne iscrtava resene odmah po unosenju, vec kad popuni ceo sudoku
        if (value === this.solution.fields[index].value) {
            this.fields[index] = this.solution.fields[index];
        }
        this.isGameOver();
    };


}

function Solution(){
    this.fields = [];
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            this.fields.push(new SudokuField(x, y, true));
        }

    }

    this.generateSolution = function(){
//make 1 string with 81 chars, taken from Library
        var sudokuString = sudoku.generate(81);

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
              //   this.fields[i*9 + j].value = Math.floor((i * 3 + i / 3 + j) % 9 + 1);
              this.fields[i * 9 + j].value = parseInt(sudokuString.charAt(i * 9 + j));
            }
        }
    };

}

var solution = new Solution();
var game = new Game(solution);

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