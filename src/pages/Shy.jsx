import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/chatHeader.jsx';
import { CONFIG } from '../config';

const Shy = ({ userName, randomizerMode }) => {
  const navigate = useNavigate();
  const [shyMessage, setShyMessage] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState(false);

  useEffect(() => {
    // Select shy message variant
    const selectedMessage = randomizerMode
      ? CONFIG.SHY_MESSAGES[Math.floor(Math.random() * CONFIG.SHY_MESSAGES.length)]
      : CONFIG.SHY_MESSAGES[0];
    setShyMessage(selectedMessage);

    // Typing animation
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
      setHeartAnimation(true);
    }, 1200);

    return () => clearTimeout(typingTimer);
  }, [randomizerMode]);

  const handleMessage = () => {
    window.open(CONFIG.CONTACT_URL, '_blank');
  };

  const handleBack = () => {
    navigate('/question');
  };

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message sent">
          <div className="message-bubble">
            I'm shy 🙈
          </div>
          <div className="message-time">just now</div>
        </div>

        {showTyping && (
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        )}

        {showMessage && (
          <>
            <div className="message received">
              <div className="message-bubble">
                {shyMessage}
              </div>
              <div className="message-time">just now</div>
            </div>

            {heartAnimation && (
              <div 
                className="message received"
                style={{ 
                  animation: 'slideIn 0.5s ease-out',
                  animationDelay: '0.3s',
                  animationFillMode: 'both'
                }}
              >
                <div className="message-bubble" style={{ fontSize: '32px', textAlign: 'center' }}>
                  💗
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showMessage && (
        <div className="chat-input-area">
          <div className="btn-group" style={{ flexDirection: 'column' }}>
            <button 
              className="btn btn-primary btn-block" 
              onClick={handleMessage}
            >
              Okay fine I'll message 💬
            </button>
            <button 
              className="btn btn-ghost btn-block" 
              onClick={handleBack}
            >
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shy;