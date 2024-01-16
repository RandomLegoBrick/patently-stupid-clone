const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");


const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    
});


app.use(express.static("client"));

server.listen(3000, () => console.log("Were up"));