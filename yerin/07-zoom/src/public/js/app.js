// 웹소켓 프로토콜을 사용해야하기 때문에  http:// 프로토콜을 사용하지 않는다
const socket = new WebSocket(`ws://${window.location.host}`);
