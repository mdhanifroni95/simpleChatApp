const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");

let io = new Server(expressServer);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("new user connection");
});

expressServer.listen(3000, () => {
  console.log(`server running at 3000`);
});
