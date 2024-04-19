// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// app.use(express.static(path.join(__dirname, '../clientsocket')));

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         wss.clients.forEach(function each(client) {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(message);
//             }
//         });
//     });
// });

// server.listen(3000, () => {
//     console.log('Server started on port 3000');
// });


const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, '../clientsocket')));


wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // Broadcast message to all clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString()); // Convert message to string
            }
        });
    });
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});


