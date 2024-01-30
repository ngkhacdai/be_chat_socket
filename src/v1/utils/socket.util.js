const socketIO = require('socket.io');
const Message = require('../models/message.model');

function socketServer(server) {
    const io = socketIO(server);

    io.on('connection', async (socket) => {
        console.log('A user connected: ' + socket.id);

        socket.on('joinroom', async (roomId) => {
            socket.join(roomId);
            console.log(`User joined room ${roomId}`);
            try {
                const messages = await Message.find({ roomId }).sort({ createdAt: 1 });
                io.to(roomId).emit('chatHistory', messages);
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        });

        socket.on('chat', async (data) => {
            const { roomId, senderId, message } = data;

            try {
                const newMessage = new Message({ roomId, senderId, message });
                await newMessage.save();

                io.to(roomId).emit('newMessage', { senderId, message });
            } catch (error) {
                console.error('Error saving message:', error);
            }
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected: ' + socket.id);
        });
    });
}

module.exports = socketServer;
