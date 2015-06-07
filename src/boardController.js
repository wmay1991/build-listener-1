var BoardController = function(){};

BoardController.prototype.setBoardState = function(inputParameter) {
    var boardStatus = null;
    switch (inputParameter) {
        case 'unknown':
          boardStatus = [1,1,1];
          break;
        default:
          boardStatus = [0,0,0];
    }
    this.writeBoardState(boardStatus);
    return boardStatus;
}

BoardController.prototype.writeBoardState = function (boardStatus) {
    return null;
}    

module.exports= BoardController;
