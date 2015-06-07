describe("BoardController", function() {

  var boardController;

  describe("setBoardState()", function() {

    beforeEach(function() {
    });

    it("will set board status to all ON if unknown", function() {
      boardController = new BoardController(); 
      var buildStatus = 'unknown';
      var boardState = boardController.setBoardState(buildStatus);
      expect(boardState.length).toEqual(3);
      expect(boardState[0]).toEqual(1);
      expect(boardState[1]).toEqual(1);
      expect(boardState[2]).toEqual(1);
    });

    it("will write the all ON state to the controller board when unknown", function() {
      var mySpy = spyOn(BoardController.prototype, 'writeBoardState').and.callThrough(); 
      boardController = new BoardController(); 
      var buildStatus = 'unknown';
      var boardState = boardController.setBoardState(buildStatus);
      expect(mySpy).toHaveBeenCalledWith([1,1,1]);
    });

});

});
