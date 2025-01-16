'use client';

import { useState } from 'react';

const ChatBotEmbed = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <iframe
          src="http://localhost:5001"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: 'none',
            width: '440px',
            height: '720px',
            zIndex: 9999,
          }}
        />
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
          }}
        >
          💬
        </button>
      )}
    </>
  );
};

export default ChatBotEmbed;
