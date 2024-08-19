import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});
	res.end("Hello world");
});

server.listen(PORT, () => {
	console.log("server running on port", PORT);
});
