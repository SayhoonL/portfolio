import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let activeVisitors = 0;

io.on("connection", (socket) => {
  activeVisitors++;
  io.emit("visitors", activeVisitors);

  socket.on("disconnect", () => {
    activeVisitors--;
    io.emit("visitors", activeVisitors);
  });
});

httpServer.listen(4000, () => {
  console.log("Node realtime server running on port 4000");
});
