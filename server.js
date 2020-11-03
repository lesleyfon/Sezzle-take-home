var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	socket.on("calculate", (msg) => {
		console.log("message: " + msg);
		io.emit("calculate", msg);
	});
});
http.listen(3000, () => {
	console.log("listening on http://localhost:3000");
});
