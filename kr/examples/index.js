const net = require("net");

const server = net.createServer((socket) => {
	socket.write("Hello World from paulbkim.dev");
	socket.on("data", (data) => console.log(data.toJSON()));
});

server.listen(8080);
