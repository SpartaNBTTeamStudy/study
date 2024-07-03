const { createServer } = require("http");
const app = require("./app");
require("dotenv").config();
const { Server } = require("socket.io"); //socket 라이브러리
const port = process.env.PORT || 5001;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

require("./utils/io")(io);

httpServer.listen(port, () => {
  console.log(`서버 서버 서버 서버 돌아라아아아아아 ${port}`);
});
