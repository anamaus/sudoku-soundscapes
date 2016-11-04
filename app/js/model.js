function SudokuField(x,y, isPartOfSolution) {
    this.x =x;
    this.y =y;
    this.isPartOfSolution = isPartOfSolution;
    this.value = -1;

}


SudokuField.prototype.setValue = function(value){
    if ((value < 1) || (value>9)) {
        return false;
    }
    else {
        this.value = value;
    }
};


function Game(solution){
    this.fields = [];
    this.solution= solution;
    this.difficulty = 0.5;

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
    }


}

function Solution(){
    this.fields = [];
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            this.fields.push(new SudokuField(x, y, true));
        }

    }

    this.generateSolution = function(){
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                this.fields[i*9 + j].value = Math.floor((i * 3 + i / 3 + j) % 9 + 1);
            }
        }
    };

}

var solution = new Solution();
var game = new Game(solution);