'use client';

import { useEffect, useState } from 'react';
import styles from './ChatBot.module.scss';

interface MenuItem {
  button: string;
  value: string | MenuItem[];
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    if (isOpen) {
      resetChat();
    }
  }, [isOpen]);

  const resetChat = async () => {
    setMessages([
      { text: 'Merhaba! Size nasıl yardımcı olabilirim?', isUser: false },
    ]);
    setMenuData([]);
    const data = await fetchMenuData();
    setMenuData(data);
  };

  const fetchMenuData = async () => {
    try {
      const response = await fetch('http://localhost:5001/menu', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch menu data:', error);
      return [];
    }
  };

  const handleButtonClick = (item: MenuItem) => {
    const userMessage = `"${item.button}" kullanımı hakkında bilgi almak istiyorum.`;
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);

    setMenuData([]);

    if (Array.isArray(item.value)) {
      setMessages((prev) => [
        ...prev,
        { text: 'Alt başlıklar aşağıda:', isUser: false },
      ]);
      setMenuData(item.value);
    } else {
      if (item.value.endsWith('.mp4')) {
        window.open(
          `http://localhost:5001/static/videos/${item.value}`,
          '_blank'
        );
      } else {
        setPopupContent(item.value);
        setShowPopup(true);
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: 'Başka bir konuda yardımcı olmamı ister misiniz?',
            isUser: false,
          },
        ]);
        fetchMenuData().then(setMenuData);
      }, 1000);
    }
  };

  return (
    <>
      <button
        className={styles['chat-button']}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div className={`${styles['chat-widget']} ${styles['active']}`}>
          <div className={styles['chat-header']}>
            <span>Chat Assistant</span>
            <button
              className={styles['close-btn']}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles['chat-body']}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles['chat-message']} ${
                  msg.isUser ? styles['user-message'] : ''
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div className={styles['buttons-container']}>
              {menuData.map((item, index) => (
                <button
                  key={index}
                  className={styles['chat-button']}
                  onClick={() => handleButtonClick(item)}
                >
                  {item.button}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className={styles['popup']} onClick={() => setShowPopup(false)}>
          <div className={styles['popup-content']}>
            <button
              className={styles['popup-close']}
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <div className={styles['popup-text']}>{popupContent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
