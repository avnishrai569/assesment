import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust the URL accordingly

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });
  }, []);

  return (
    <div>
      <h1>Valid Data</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.name} - {message.origin} to {message.destination}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
