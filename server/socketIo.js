import { Server } from 'socket.io'

export function socketIo(server) {
  const io = new Server(server)
  let users = {}
  io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('login', (username) => {
      users[username] = socket.id
      // Emit the updated user list to all connected clients
      socket.emit('update user list', users)
      console.log('socket_id', users)
    })

    socket.on('create private room', (recipientId) => {
      // Generate a unique room ID
      console.log('id', recipientId)
      const room = [socket.id, recipientId].sort().join('-')
      socket.join(room)
      socket.to(recipientId).emit('join private room', room)
      // Join the room

      // Notify the recipient to join the room
    })
    socket.on('join', (data) => {
      socket.join(data.room)
      console.log('data.room', data.room)

      io.in(data.room).emit('message', `New user joined ${data.room} room!`)
    })
    socket.on('message', (data) => {
      console.log(`message: ${data.msg}`)
      console.log(`room: ${data.room}`)
      io.in(data.room).emit('message', data.msg)
    })
  })

  io.on('disconnect', (socket) => {
    socket.on('logout', (username) => {
      console.log(`User disconnected: ${username}`)
      delete users[username]
      console.log(users)
    })
    console.log('user Disconnected')

    io.emit('message', 'User disconnected')
  })
}
