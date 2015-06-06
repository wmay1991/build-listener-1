describe("BuildState", function() {

  describe("determineStatus()", function() {

    it("will set build status to unknown if not valid", function() {
      var inputParameter = null;
      var buildStatus = BuildState.determineStatus(inputParameter);
      expect(buildStatus).toEqual('unknown');
    });

    it("will set build status to input value if valid pass", function() {
      var inputParameter = 'pass';
      var buildStatus = BuildState.determineStatus(inputParameter);
      expect(buildStatus).toEqual(inputParameter);
    });

    it("will set build status to input value if valid warn", function() {
      var inputParameter = 'warn';
      var buildStatus = BuildState.determineStatus(inputParameter);
      expect(buildStatus).toEqual(inputParameter);
    });

    it("will set build status to input value if valid fail", function() {
      var inputParameter = 'fail';
      var buildStatus = BuildState.determineStatus(inputParameter);
      expect(buildStatus).toEqual(inputParameter);
    });
  });

});
