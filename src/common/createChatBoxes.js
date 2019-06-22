import React from 'react';
import ChatElement from 'components/chat-element'

const createChatBoxes = (arr) => (
  <div>
    {arr.map((el, key) => (
        <ChatElement key={key}>{el}</ChatElement>
    ))}
  </div>
)

export default createChatBoxes