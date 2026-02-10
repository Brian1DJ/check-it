import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader';
import { CONFIG } from '../config';

const NoBranch = ({ userName, randomizerMode }) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    // Select response variant
    const selectedResponse = randomizerMode
      ? CONFIG.NO_RESPONSES[Math.floor(Math.random() * CONFIG.NO_RESPONSES.length)]
      : CONFIG.NO_RESPONSES[0];
    setResponse(selectedResponse);

    // Typing animation
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
      setShowResponse(true);
    }, 1200);

    return () => clearTimeout(typingTimer);
  }, [randomizerMode]);

  const handleMessage = () => {
    window.open(CONFIG.CONTACT_URL, '_blank');
  };

  const handleShy = () => {
    navigate('/shy');
  };

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message sent">
          <div className="message-bubble">
            No 😌
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

        {showResponse && (
          <>
            <div className="message received">
              <div className="message-bubble">
                {response}
              </div>
              <div className="message-time">just now</div>
            </div>

            <div className="message received">
              <div className="message-bubble">
                I don't bite 😊
              </div>
              <div className="message-time">just now</div>
            </div>
          </>
        )}
      </div>

      {showResponse && (
        <div className="chat-input-area">
          <div className="btn-group" style={{ flexDirection: 'column' }}>
            <button 
              className="btn btn-primary btn-block" 
              onClick={handleMessage}
            >
              Message you now 💬
            </button>
            <button 
              className="btn btn-secondary btn-block" 
              onClick={handleShy}
            >
              I'm shy 🙈
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoBranch;