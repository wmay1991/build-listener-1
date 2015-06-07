var BoardController = require('../app/boardController');

describe("BoardController", function() {

  var boardController;
  var allPinsOn

  describe("setBoardState()", function() {

    beforeEach(function() {
        allPinsOn = { pin13: { value: 1 }, pin12: { value: 1 }, pin11: { value: 1 } };
        pin13On = { pin13: { value: 1 }, pin12: { value: 0 }, pin11: { value: 0 } };
        pin12On = { pin13: { value: 0 }, pin12: { value: 1 }, pin11: { value: 0 } };
        pin11On = { pin13: { value: 0 }, pin12: { value: 0 }, pin11: { value: 1 } };
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

});

});
