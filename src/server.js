const path = require("path");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Serves Index.html file on the home route
app.get("/", (req, res) => {
	let dir_ = path.join(__dirname, "..", "index.html");
	res.sendFile(dir_);
});

// Opens a websocket communications
io.on("connection", (socket) => {
	// Socket to connect to by each client. To connect to this socket the first argument on the .on method must be the same
	socket.on("calculate", (msg) => {
		io.emit("calculate", msg); // Emits an event gotten from one client to other clients
	});
});
http.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
