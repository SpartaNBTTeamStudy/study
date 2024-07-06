import express from "express";

/** nodemon이란?
 * 서버 코드를 변경 할 때마다, 자동으로 서버를 재시작 해줍니다. */

const app = express();

console.log("hello");

app.listen("3000");
