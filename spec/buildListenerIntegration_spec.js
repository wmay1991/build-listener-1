var request = require('http');
var BuildListener = require('../app/buildListener');

describe("Build Listener Integration", function() {

  describe("will handle http request", function() {
    
    var actualResponse;

    it("will return a friendly denial for an http get", function(done) {

	listener = new BuildListener();
	
	request.get('http://dons_edison.local:8081', function(response) {
		expect(response.statusCode).toBe(405);
		done();
	});
    });
  });
});
