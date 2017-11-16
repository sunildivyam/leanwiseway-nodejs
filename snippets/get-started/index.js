var http = require("http");

http.createServer(function(req, res) {
	res.writeHeader(200, {'Content-Type': 'text/html'});
	res.write('Hello world!');
	res.end();
}).listen(8000);