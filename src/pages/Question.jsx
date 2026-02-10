import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader';
import { CONFIG } from '../config';

const Question = ({ userName, randomizerMode }) => {
  const navigate = useNavigate();
  const [showTyping, setShowTyping] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [headline, setHeadline] = useState('');
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonClicks, setNoButtonClicks] = useState(0);

  useEffect(() => {
    // Select headline
    const selectedHeadline = randomizerMode 
      ? CONFIG.QUESTION_HEADLINES[Math.floor(Math.random() * CONFIG.QUESTION_HEADLINES.length)]
      : CONFIG.QUESTION_HEADLINES[0];
    setHeadline(selectedHeadline);

    // Typing animation
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
      setShowQuestion(true);
    }, 1500);

    return () => clearTimeout(typingTimer);
  }, [randomizerMode]);

  const handleYes = () => {
    navigate('/yes');
  };

  const handleNo = () => {
    // First click: button slides once (not manipulative, just playful)
    if (noButtonClicks === 0) {
      const randomX = Math.random() > 0.5 ? 60 : -60;
      const randomY = Math.random() > 0.5 ? 40 : -40;
      setNoButtonStyle({
        transform: `translate(${randomX}px, ${randomY}px)`,
        transition: 'transform 0.3s ease'
      });
      setNoButtonClicks(1);
      
      // Reset position after animation
      setTimeout(() => {
        setNoButtonStyle({});
      }, 300);
    } else {
      // Second click onwards: actually navigate
      navigate('/no');
    }
  };

  const handleOptOut = () => {
    navigate('/goodbye');
  };

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message received">
          <div className="message-bubble">
            {headline}
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

        {showQuestion && (
          <div className="message received">
            <div className="message-bubble">
              Do you already have a date for Valentine's? 💭
            </div>
            <div className="message-time">just now</div>
          </div>
        )}
      </div>

      {showQuestion && (
        <div className="chat-input-area">
          <div className="btn-group">
            <button 
              className="btn btn-primary" 
              onClick={handleYes}
              style={{ flex: 1 }}
            >
              Yes 😅
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handleNo}
              style={{ flex: 1, ...noButtonStyle }}
            >
              No 😌
            </button>
          </div>
          
          <button 
            className="btn btn-ghost btn-block" 
            onClick={handleOptOut}
            style={{ marginTop: '12px' }}
          >
            Actually, I'd rather not answer
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;