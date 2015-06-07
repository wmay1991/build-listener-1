var boardState = {};

var BoardController = function(){
    this.initBoardState();
};

BoardController.prototype.initBoardState = function() {
    boardState['pin13'] = {value: 0};    
    boardState['pin12'] = {value: 0};    
    boardState['pin11'] = {value: 0};    
};

BoardController.prototype.setBoardState = function(inputParameter) {
    this.initBoardState();
    switch (inputParameter) {
        case 'unknown':
          for (var pin in boardState) {
            boardState[pin].value = 1;
          }
          break;
        case 'pass':
          boardState['pin13'].value = 1;
          break;
        case 'warn':
          boardState['pin12'].value = 1;
          break;
        case 'fail':
          boardState['pin11'].value = 1;
          break;
    }
    this.writeBoardState(boardState);
    return boardState;
}

BoardController.prototype.writeBoardState = function (boardState) {
    return null;
}    

module.exports= BoardController;
