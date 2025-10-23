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
  //receive data from client
  socket.on("chat message", (msg) => {
    console.log(msg);
    //sent data server to client
    io.emit("chat message", msg);
  });
});

expressServer.listen(3000, () => {
  console.log(`server running at 3000`);
});
