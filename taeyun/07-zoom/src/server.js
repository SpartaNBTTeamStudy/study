import http from "http";
// import WebSocket from "ws";
import express from "express";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const app = express();

app.set("view engine", "pug"); // 뷰엔진 pug로 설정
app.set("views", __dirname + "/views"); //
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home")); // home렌더링
app.get("/*", (req, res) => res.redirect("/")); // 홈화면이 아니면 redirect시킴

// 같은 서버에서 http, websocket 둘 다 작동시킴
const httpServer = http.createServer(app);
// const wss = new WebSocket.Server({ server });
const wsServer = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});
instrument(wsServer, {
  auth: false,
  mode: "development",
});
/*
function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

// 챗방 유저 카운트
function countRoom(roomName) {
  return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anon";
  socket.onAny((event) => {
    console.log(wsServer.sockets.adapter);
    console.log(`Socket Event: ${event}`);
  });

  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName)); // 챗방에 있는 사람한테 들어갈때 알림(메세지를 하나의 소켓에만 보냄)
    wsServer.sockets.emit("room_change", publicRooms()); // 메세지를 모든 소켓에 보냄
  });

  socket.on("disconnecting", () => {
    // 같은 챗방에 있는 사람들에게 나갈때 알림
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
    );
  });

  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRooms());
  });

  socket.on("new_message", (msg, room, done) => {
    // room => 어느 챗방으로 보낼건지
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });

  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

*/

// ============== 비디오 파트 =========================

wsServer.on("connection", (socket) => {
  socket.on("join_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome2");
  });
});

/*
  ex) 브라우저를 닫으면 close부분이 터미널에 실행되어 양방향으로 볼 수 있음
const onSocketClose = () => {
  console.log("Disconnected from the Browser ❌");
};
const sockets = [];
wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("Connected to Browser ✅");
  socket.on("close", onSocketClose);
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);
    switch (message.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${message.payload}`)
        );
        break;
      case "nickname":
        socket["nickname"] = message.payload;
        break;
    }
  });
});
*/

const handleListen = () => console.log("로컬 3000번~!");
httpServer.listen(3000, handleListen);
