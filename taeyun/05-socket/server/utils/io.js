module.exports = function (io) {
  // io.emit("message", "Hello from server"); // 서버에 연결된 모든 클라이언트에게 메시지 전송

  // 클라이언트가 연결될 때 실행되는 이벤트 리스너
  io.on("connection", async (socket) => {
    console.log(`클라이언트 연결 - 손님 등장!! : ${socket.id}`);

    socket.on("login", async (userName) => {
      console.log(`서버에서 유저 입장 받아요~~ : ${userName}`);
      // await socket.broadcast.emit("서버에서 유저 입장 받아요~~", userName);
    });

    socket.on("disconnect", () => {
      console.log(`연결 끊겼어~~, 손님 퇴장~~ : ${socket.id}`);
    });
  });
};
