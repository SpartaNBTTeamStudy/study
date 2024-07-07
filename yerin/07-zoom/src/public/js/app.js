const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nickForm = document.querySelector("#nick");

// 서버에 데이터를 보내기 위한 규격을 만들어 리턴하는 함수
// 백엔드에 보낼 때엔 string 규격밖에 되지 않음
const makeMessage = (type, payload) => {
  const msg = { type, payload };
  return JSON.stringify(msg);
};

// 웹소켓 프로토콜을 사용해야하기 때문에  http:// 프로토콜을 사용하지 않는다
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server 🍀");
});

socket.addEventListener("message", (event) => {
  const li = document.createElement("li");
  li.innerText = event.data;
  messageList.append(li);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

const handleSubmit = (event) => {
  event.preventDefault();

  const input = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", input.value));

  input.value = "";
};

const handleNickSubmit = (event) => {
  event.preventDefault();

  const input = nickForm.querySelector("input");
  socket.send(makeMessage("nickname", input.value));

  input.value = "";
};

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
