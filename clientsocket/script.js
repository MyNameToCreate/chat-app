// client.js
// const ws = new WebSocket('ws://localhost:3000');

// const chatBox = document.getElementById('chat-box');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', function() {
//     const message = messageInput.value;
//     if (message.trim() !== '') {
//         ws.send(message);
//         messageInput.value = '';
//     }
// });

// ws.onmessage = function(event) {
//     const message = event.data;
//     const messageElement = document.createElement('div');
//     messageElement.textContent = message;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
// };





// const ws = new WebSocket('ws://localhost:3000');

// const chatBox = document.getElementById('chat-box');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', function() {
//     const message = messageInput.value;
//     if (message.trim() !== '') {
//         ws.send(message);
//         messageInput.value = '';
//     }
// });

// ws.onmessage = function(event) {
//     const message = event.data;
//     const messageElement = document.createElement('div');
//     messageElement.textContent = message;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
// };


// const ws = new WebSocket('ws://localhost:3000');

// const chatBox = document.getElementById('chat-box');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', function() {
//     const message = messageInput.value;
//     if (message.trim() !== '') {
//         displayMessage(message, 'sent');
//         ws.send(message);
//         messageInput.value = '';
//     }
// });

// ws.onmessage = function(event) {
//     const message = event.data;
//     displayMessage(message, 'received');
// };

// function displayMessage(message, type) {
//     const messageElement = document.createElement('div');
//     messageElement.textContent = message;
//     messageElement.classList.add('message', type === 'sent' ? 'sent' : 'received');
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
// }



const ws = new WebSocket('ws://localhost:3000');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        displayMessage(message, 'sent');
        ws.send(message);
        messageInput.value = '';
    }
}

ws.onmessage = function(event) {
    const message = event.data;
    displayMessage(message, 'received');
};

function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', type === 'sent' ? 'sent' : 'received');
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}




