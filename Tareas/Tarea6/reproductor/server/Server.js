const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
      origin: "*"
  }
});

const { truncate } = require('fs');

io.on('connection', (socket) => {
  console.log("Se conecto un cliente");

  socket.on("key", data => {
      console.log(data);
      setInterval(() => {
          io.emit("key", data + " desde el server")
      }, 500);
  })
});

server.listen(4000, () => {
  console.log('listening on port :4000');
});