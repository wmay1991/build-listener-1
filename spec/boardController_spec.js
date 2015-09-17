var BoardController = require('../app/boardController');
var mraa = require('mraa')

describe("BoardController", function() {

  var boardController;
  var allPinsOn;
  var allPinsOff;

  var pin11 = new mraa.Gpio(11);
  var pin12 = new mraa.Gpio(12);
  var pin13 = new mraa.Gpio(13);

  describe("setBoardState()", function() {

    beforeEach(function() {
        allPinsOn = { pin11: { pin: pin11, value: 1 }, pin12: { pin: pin12, value: 1 }, pin13: { pin: pin13, value: 1 } };
        allPinsOff = { pin11: { pin: pin11, value: 0 }, pin12: { pin: pin12, value: 0 }, pin13: { pin: pin13, value: 0 } };
        pin13On = { pin11: { pin: pin11, value: 0 }, pin12: { pin: pin12, value: 0 }, pin13: { pin: pin13, value: 1 } };
        pin12On = { pin11: { pin: pin11, value: 0 }, pin12: { pin: pin12, value: 1 }, pin13: { pin: pin13, value: 0 } };
        pin11On = { pin11: { pin: pin11, value: 1 }, pin12: { pin: pin12, value: 0 }, pin13: { pin: pin13, value: 0 } };
    });

    it("will set board state to all ON if unknown", function() {
      boardController = new BoardController(); 
      var buildStatus = 'unknown';
      var boardState = boardController.setBoardState(buildStatus);
      expect(Object.keys(boardState).length).toEqual(3);
      expect(boardState['pin13'].value).toEqual(1);
      expect(boardState['pin12'].value).toEqual(1);
      expect(boardState['pin11'].value).toEqual(1);
    });

    it("will write the all OFF state to the controller board when initialized", function() {
      boardController = new BoardController();
      boardController.initBoardState();
      expect(boardController.getBoardState()).toEqual(allPinsOff);
    });

    it("will write the all ON state to the controller board when unknown", function() {
      var mySpy = spyOn(BoardController.prototype, 'writeBoardState').andCallThrough();
      boardController = new BoardController();
      var buildStatus = 'unknown';
      var boardState = boardController.setBoardState(buildStatus);
      expect(mySpy).toHaveBeenCalledWith(allPinsOn);
    });

    it("will set board state to pin 13 ON if pass", function() {
      boardController = new BoardController(); 
      var buildStatus = 'pass';
      var boardState = boardController.setBoardState(buildStatus);
      expect(boardState).toEqual(pin13On);
    });

    it("will set board state to pin 12 ON if warn", function() {
      boardController = new BoardController(); 
      var buildStatus = 'warn';
      var boardState = boardController.setBoardState(buildStatus);
      expect(boardState).toEqual(pin12On);
    });

    it("will set board state to pin 11 ON if fail", function() {
      boardController = new BoardController(); 
      var buildStatus = 'fail';
      var boardState = boardController.setBoardState(buildStatus);
      expect(boardState).toEqual(pin11On);
    });

    it("will write board state to pin 11 ON if fail", function() {
      boardController = new BoardController(); 
      var mySpy = spyOn(pin11, 'write');
      boardController.writeBoardState(pin11On);
      expect(mySpy).toHaveBeenCalledWith(1);
    });

    it("will write board state to pin 12 ON if warn", function() {
      boardController = new BoardController();
      var mySpy = spyOn(pin12, 'write');
      boardController.writeBoardState(pin12On);
      expect(mySpy).toHaveBeenCalledWith(1);
    });

    it("will write board state to pin 13 ON if pass", function() {
      boardController = new BoardController();
      var mySpy = spyOn(pin13, 'write');
      boardController.writeBoardState(pin13On);
      expect(mySpy).toHaveBeenCalledWith(1);
    });
  });
    describe("getBoardState- value for pin 13 for pass"), function()
  {
	  boardController = new BoardController(); 
      var buildStatus = 'pass';
      var boardState = boardController.setBoardState(buildStatus);
	  var getBoardSt = boardController.getBoardState();
	  expect(getBoardSt.boardState["pin13"].value).toEqual(1);  
  });
  
  describe("getBoardState - value for pin 12 for pass"), function()
  {
	  boardController = new BoardController(); 
      var buildStatus = 'pass';
      var boardState = boardController.setBoardState(buildStatus);
	  var getBoardSt = boardController.getBoardState();
	  expect(getBoardSt.boardState["pin12"].value).toEqual(0);  
  });
  
  describe("getBoardState - value for pin 11 for pass"), function()
  {
	  boardController = new BoardController(); 
      var buildStatus = 'pass';
      var boardState = boardController.setBoardState(buildStatus);
	  var getBoardSt = boardController.getBoardState();
	  expect(getBoardSt.boardState["pin11"].value).toEqual(0);  
  });
});
