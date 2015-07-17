var BuildListener = require('../app/buildListener');

describe("Build Listener", function() {

  var buildListener;

  describe("creatServer()", function() {

    it("will create a server with my params", function() {
      var mySpy = spyOn(BuildListener.prototype, 'createServer');
      buildListener = new BuildListener(); 
      expect(mySpy).toHaveBeenCalledWith('buildListener', '1.0.0');
    });

    it("will create a server with the correct name and version", function() {
      buildListener = new BuildListener(); 
      expect(buildListener.name()).toEqual('buildListener');
      expect(buildListener.version()).toEqual('1.0.0');
    });

  });
});
