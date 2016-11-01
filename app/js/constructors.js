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






