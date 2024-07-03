const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const { PORT, MONGO_DB } = process.env;

const cors = require("cors");
const app = express();

app.use(cors()); // 어떤 주소로 요청이 들어오든 접근 허가?? 허용

mongoose
  .connect("mongodb://localhost:27017/chat-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("데이터베이스 연결 성공~!~!~!~!~!~!"));

module.exports = app;
