const app = require('./src/v1/app');
const http = require('http');
const socketServer = require('./src/v1/utils/socket.util');

const PORT = 8000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

socketServer(server); // Start socket server
