import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/chatHeader.jsx';
import { CONFIG } from '../config';

const YesBranch = ({ 
  userName, 
  randomizerMode, 
  selectedActivity, 
  setSelectedActivity,
  selectedTime,
  setSelectedTime 
}) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [showSelections, setShowSelections] = useState(false);

  useEffect(() => {
    // Select response variant
    const selectedResponse = randomizerMode
      ? CONFIG.YES_RESPONSES[Math.floor(Math.random() * CONFIG.YES_RESPONSES.length)]
      : CONFIG.YES_RESPONSES[0];
    setResponse(selectedResponse);

    // Typing animation sequence
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
      setShowResponse(true);
    }, 1200);

    const selectionsTimer = setTimeout(() => {
      setShowSelections(true);
    }, 2500);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(selectionsTimer);
    };
  }, [randomizerMode]);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedActivity && selectedTime) {
      navigate('/share');
    }
  };

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message sent">
          <div className="message-bubble">
            Yes 😅
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
                So... help me plan this?
              </div>
              <div className="message-time">just now</div>
            </div>
          </>
        )}
      </div>

      {showSelections && (
        <div className="chat-input-area">
          <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            Pick a vibe:
          </div>
          
          <div className="selection-grid">
            {CONFIG.DATE_ACTIVITIES.map(activity => (
              <div
                key={activity.id}
                className={`selection-item ${selectedActivity?.id === activity.id ? 'selected' : ''}`}
                onClick={() => handleActivitySelect(activity)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleActivitySelect(activity)}
              >
                <div className="selection-emoji">{activity.emoji}</div>
                <div className="selection-label">{activity.label}</div>
              </div>
            ))}
          </div>

          <div style={{ margin: '20px 0 16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            Pick a time:
          </div>
          
          <div className="selection-grid">
            {CONFIG.TIME_SLOTS.map(time => (
              <div
                key={time.id}
                className={`selection-item ${selectedTime?.id === time.id ? 'selected' : ''}`}
                onClick={() => handleTimeSelect(time)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleTimeSelect(time)}
              >
                <div className="selection-emoji">{time.emoji}</div>
                <div className="selection-label">{time.label}</div>
              </div>
            ))}
          </div>

          <button 
            className="btn btn-primary btn-block" 
            onClick={handleContinue}
            disabled={!selectedActivity || !selectedTime}
            style={{
              marginTop: '20px',
              opacity: (!selectedActivity || !selectedTime) ? 0.5 : 1,
              cursor: (!selectedActivity || !selectedTime) ? 'not-allowed' : 'pointer'
            }}
          >
            Continue 💬
          </button>
        </div>
      )}
    </div>
  );
};

export default YesBranch;