const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Redis = require('ioredis');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// Conéctate a Redis
const redis = new Redis({
    host: '172.17.0.2',
    port: 6379,
    db: 12,
});


io.on('connection', (socket) => {
  console.log('Cliente conectado');
  
  redis.subscribe('artist', (err, count) => {
    if (err) {
      console.error('Error al suscribirse a Redis:', err);
    } else {
      console.log('Conectado a Redis');
    }
  });

  redis.on('message', (channel, message) => {
    console.log('Mensaje de Redis:', message);
    socket.emit('artist', JSON.parse(message));

  });
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

});

server.listen(4000, () => {
  console.log('Servidor Express escuchando en el puerto 4000');
});