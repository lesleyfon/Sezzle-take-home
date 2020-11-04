const app = require("express")();
const path = require("path");
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
	let dir_ = path.join(__dirname, "..", "index.html");
	res.sendFile(dir_);
});

io.on("connection", (socket) => {
	socket.on("calculate", (msg) => {
		io.emit("calculate", msg);
	});
});
http.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
