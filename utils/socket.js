import { io } from "socket.io-client";

const newSocket = io("http://192.168.1.72:3000");
const sendMessage = (msg) => {
  newSocket.emit("message", msg);
};

const throwCard = (card) => {
  console.log("Throwing card:", card);
  newSocket.emit("card-thrown", card);
};

export { newSocket, sendMessage, throwCard };
