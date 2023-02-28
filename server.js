const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	let path = './pages/'
	switch(req.url) {
		case '/':
			res.statusCode = 200;
			path += 'index.html';
			break;
		case '/about':
			res.statusCode = 200;
			path += 'about.html';
			break
		case '/contact-me':
			res.statusCode = 200;
			path += 'contact-me.html';
			break
		default:
			res.statusCode = 404;
			path += '404.html';
			break
	}
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	})
})

server.listen(3000, 'localhost', () => {
	console.log("Listening on port 3000");
})