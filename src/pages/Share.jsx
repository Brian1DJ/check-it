import { useState, useEffect } from 'react';
import ChatHeader from '../components/chatHeader';
import { CONFIG } from '../config';

const Share = ({ userName, selectedActivity, selectedTime }) => {
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [psLine, setPsLine] = useState('');
  const [copied, setCopied] = useState(false);

  const generateMessage = () => {
    const activity = selectedActivity?.label || 'something fun';
    const time = selectedTime?.label || 'soon';
    
    const messages = [
      `Hey! So... ${activity.toLowerCase()} on ${CONFIG.EVENT_DATE} around ${time.toLowerCase()}? 👀`,
      `Quick question: ${activity.toLowerCase()} on Valentine's, ${time.toLowerCase()}? Let me know 💭`,
      `Throwing this out there: ${activity.toLowerCase()} on ${CONFIG.EVENT_DATE}, maybe ${time.toLowerCase()}? 🌹`,
      `Random idea: ${activity.toLowerCase()} on Valentine's around ${time.toLowerCase()}? What do you think? ✨`,
      `Been thinking... ${activity.toLowerCase()} on ${CONFIG.EVENT_DATE}, ${time.toLowerCase()}? Just us? 💬`
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return randomMessage;
  };

  const selectPsLine = () => {
    return CONFIG.PS_LINES[Math.floor(Math.random() * CONFIG.PS_LINES.length)];
  };

  useEffect(() => {
    setGeneratedMessage(generateMessage());
    setPsLine(selectPsLine());
  }, []);

  const handleCopy = () => {
    const fullMessage = `${generatedMessage}\n\n${psLine}`;
    navigator.clipboard.writeText(fullMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleRegenerate = () => {
    setGeneratedMessage(generateMessage());
    setPsLine(selectPsLine());
  };

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message received">
          <div className="message-bubble">
            Here's what I'm thinking... feel free to edit before you send it 📝
          </div>
          <div className="message-time">just now</div>
        </div>

        <div className="copy-box">
          {copied && <div className="copy-success">✓ Copied!</div>}
          <div style={{ marginBottom: '12px' }}>
            {generatedMessage}
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            {psLine}
          </div>
        </div>
      </div>

      <div className="chat-input-area">
        <div className="btn-group" style={{ flexDirection: 'column' }}>
          <button 
            className="btn btn-primary btn-block" 
            onClick={handleCopy}
          >
            Copy to clipboard 📋
          </button>
          <button 
            className="btn btn-secondary btn-block" 
            onClick={handleRegenerate}
          >
            Generate new version 🔄
          </button>
        </div>

        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          background: 'rgba(139, 127, 255, 0.1)',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '14px',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ marginBottom: '8px' }}>Now go get 'em 💪</div>
          <div style={{ fontSize: '12px' }}>
            Activity: {selectedActivity?.label} • Time: {selectedTime?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;