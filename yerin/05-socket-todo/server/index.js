const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketIO = require("socket.io")(server, { cors: { origin: "*" } });

const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

server.listen(port, () => {
  console.log("Socket IO server listening on port" + port);
});

socketIO.on("connection", (socket) => {
  socket.on("addTodo", (inputValue) => {
    socketIO.emit("useSuccess", inputValue);
    console.log("@@", inputValue);
  });
});
