import { useEffect } from "react";
import "./App.css";
import socket from "./server";

function App() {
  console.log(socket);

  const getUserName = () => {
    const userName = prompt("닉네임을 입력해주세요");
    console.log(userName);

    // 서버에 새로운 유저 입장 이벤트 보내기
    socket.emit(`login`, userName, (res) => {
      console.log("서버에 새로운 유저 입장 이벤트 보내기 성공!", res);
    });
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div>
      <h2>리액트 되라</h2>
    </div>
  );
}

export default App;
