
/*
Top level rounting method - New pages can be added easilty inside this method. If the request URL does not have predefined route then page not found is sent back to browser.
*/

var genResponse = function (pathname , req, res ){
	if (pathname.match("/localhost/heartbeat")){
		res.writeHead(200,{'Content-Type': 'text/plain',
				   'X-Heartbeat': '1',
				   'X-NumChild': '1',
				   'X-TXPerSec': '12'});
		res.end()		
	}
	else{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write("Invalid path");
		res.end()
	}
		
}

/*

methods exposed to main server module and test script.
*/

module.exports = {genResponse :genResponse};


