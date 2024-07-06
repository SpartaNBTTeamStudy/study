import express from "express";

/** nodemon이란?
 * 서버 코드를 변경 할 때마다, 자동으로 서버를 재시작 해줍니다. */

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home");
});

const handleListen = () => {
  console.log("Listening on http://localhost:3000");
};

app.listen("3000", handleListen);
