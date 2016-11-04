
function setFieldsIds(){
    var elements= document.querySelectorAll('.sudoku-col-1-9__text');

    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).attr('id', 'field' + i);
    }

}


function makeDifficultyButtonActive(difficultyBtn){
    $(difficultyBtn).addClass('active').siblings().removeClass('active');
}



// show fields in html
function drawAllFields() {
    var elements= document.querySelectorAll('.sudoku-col-1-9__text');

    for (var i = 0; i < elements.length; i++) {
        var el = $(elements[i]);
        el.removeAttr('contentEditable');

        for (var j = 0; j < game.fields.length; j++) {
            if (i === j) {
                if (game.fields[j].isPartOfSolution) {
                    el.text(game.fields[j].value);
                }
                else if (game.fields[j].value === -1){
                    el.text('').attr('contentEditable', 'true');
                }
                else if (game.fields[j].value !== -1){
                    el.attr('contentEditable', 'true');
                }
                break;
            }
        }

    }
}
