'use client'

import axios from 'axios';
import { useState } from 'react';

import Msg from '../components/msg';
import Header from '../components/header';
import Footer from '../components/footer';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  
  const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://127.0.0.1:5000",
  });
   
  const handleSend = (event: any) => {
    event.preventDefault();
    setMessages(prevMessages => [...prevMessages, {role: 'user', content: message}]);
    api.post('/api/chat', {
      prompt: message
    })
    .then(function (response) {
      setMessages(prevMessages => [...prevMessages, response.data]);
    })
    .catch(function (error) {
      console.log(error);
    });
    setMessage('');
  }

  return (
    <><div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <Header name="Parag" description="professionally aligned retrieval augmented generation"/>

      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto justify-end scroll-smooth">
        <Msg role="assistant" message="Welcome !!!" />
        {messages.map((message, index) => (
          <Msg key={index} role={message.role} message={message.content} />
        ))}
      </div>

      <Footer message={message} parentSetMessage={setMessage} parentSend={handleSend} />
    </div></>
  )
}
export default Chat;
