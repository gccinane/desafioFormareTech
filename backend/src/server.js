import app from './app'
import socketio from 'socket.io'
import http from 'http'

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  socket.on('sendMessage', data => {
    socket.broadcast.emit('receivedMessage', data)
  })

  socket.on('disconnect', () => {
  })
})

server.listen(3333)
