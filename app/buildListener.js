var restify = require('restify');

var server;

var BuildListener = function(){
	this.createServer('buildListener', '1.0.0');
};

BuildListener.prototype.createServer = function(serverName, serverVersion) {
    server = restify.createServer({
	name: serverName,
	version: serverVersion
    });

    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());
}

BuildListener.prototype.name = function() {
    return server.name;
}

BuildListener.prototype.version = function() {
    return server.versions;
}

module.exports= BuildListener;
