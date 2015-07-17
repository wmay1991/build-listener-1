var mraa = require('mraa');

var pin11 = new mraa.Gpio(11);
var pin12 = new mraa.Gpio(12);
var pin13 = new mraa.Gpio(13);

var boardState = {};

var BoardController = function(){
    this.initBoardState();
};

BoardController.prototype.getBoardState = function() {
	return boardState;
}

BoardController.prototype.initBoardState = function() {
    boardState['pin11'] = {pin: pin11, value: 0};    
    boardState['pin12'] = {pin: pin12, value: 0};    
    boardState['pin13'] = {pin: pin13, value: 0};    
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
  for (var pinNum in boardState) {
        boardState[pinNum].pin.write(boardState[pinNum].value);
  }
}    

module.exports= BoardController;
