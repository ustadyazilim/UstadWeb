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
            bottom: '24px',
            right: '24px',
            border: 'none',
            width: '460px',
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
            bottom: '20p<F9>x',
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
