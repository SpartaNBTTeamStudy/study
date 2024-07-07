const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

// 웹소켓 프로토콜을 사용해야하기 때문에  http:// 프로토콜을 사용하지 않는다
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server 🍀");
});

socket.addEventListener("message", async (event) => {
  console.log(await event.data.text());
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

const handleSubmit = (event) => {
  event.preventDefault();

  const input = messageForm.querySelector("input");
  socket.send(input.value);

  input.value = "";
};

messageForm.addEventListener("submit", handleSubmit);
