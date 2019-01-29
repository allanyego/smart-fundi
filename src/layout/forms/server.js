const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	req.on('data', (body) => {
		console.log(body);
	});
	console.log('Req');
	console.log(req);

	console.log('Res');
	console.log(res);

	res.on('end', () => {
		console.log('Response end.');
	})
	res.end('Hello');
})

server.listen(8000);