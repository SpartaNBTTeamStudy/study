import http from "http";
import WebSocket from "ws";
import express from "express";

/** nodemon이란?
 * 서버 코드를 변경 할 때마다, 자동으로 서버를 재시작 해줍니다. */

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
// 이외의 다른 경로에 떨어져도 리다이렉트 되게
app.get("/*", (req, res) => res.redirect("/"));

// 같은 서버에서 http와 ws를 사용하기 위해서 생성
// 서버는 http, ws 2개의 프로토콜을 이해할 수 있게 되었다
// http://localhost:3000 또는 ws://localhost:3000 으로 접속 가능
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// 두개의 웹소켓이 동작할 때 배열로 전부 넣어준다.
const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon"; // 소켓에 데이터 저장도 가능
  console.log("Connected to Browser 🍀");

  socket.on("close", () => {
    console.log("Disconnected from Browser ❌");
  });

  socket.on("message", (msg) => {
    const message = JSON.parse(msg);

    switch (message.type) {
      case "new_message": // 메세지면 다시 프론트에 보내줌
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${message.payload}`)
        );
        break;
      case "nickname":
        socket["nickname"] = message.payload; // 방금 받은 타입이 닉네임이면 소켓에 저장
        break;
    }
  });
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
