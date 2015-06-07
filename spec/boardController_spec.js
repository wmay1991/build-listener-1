describe("BoardController", function() {

  describe("setBoardState()", function() {

    it("will set board status to all ON if unknown", function() {
      var buildStatus = 'unknown';
      var boardState = BoardController.setBoardState(buildStatus);
      expect(boardState.length).toEqual(3);
      expect(boardState[0]).toEqual(1);
      expect(boardState[1]).toEqual(1);
      expect(boardState[2]).toEqual(1);
    });

});

});
