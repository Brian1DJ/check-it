import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader';
import EasterEgg from '../components/EasterEgg';
import { CONFIG } from '../config';

const Intro = ({ setUserName, randomizerMode, setRandomizerMode, vibeMode, setVibeMode }) => {
  const [nameInput, setNameInput] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (nameInput.trim()) {
      setUserName(nameInput.trim());
    }
    navigate('/question');
  };

  const toggleRandomizer = () => {
    setRandomizerMode(!randomizerMode);
  };

  return (
    <div className="chat-container">
      <ChatHeader name="New Message" status="typing..." />
      
      <div className="chat-messages">
        <div className="message received">
          <div className="message-bubble">
            Hey 👋
          </div>
          <div className="message-time">just now</div>
        </div>

        <div className="message received">
          <div className="message-bubble">
            Got something to ask you
          </div>
          <div className="message-time">just now</div>
        </div>

        <div className="message received">
          <div className="message-bubble">
            Nothing weird I promise 😅
          </div>
          <div className="message-time">just now</div>
        </div>
      </div>

      <div className="chat-input-area">
        <div className="toggle-wrapper">
          <div className="toggle-label">
            <span>🎲</span>
            <span>Surprise me with different lines</span>
          </div>
          <div 
            className={`toggle-switch ${randomizerMode ? 'active' : ''}`}
            onClick={toggleRandomizer}
            role="switch"
            aria-checked={randomizerMode}
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && toggleRandomizer()}
          >
            <div className="toggle-slider"></div>
          </div>
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="What should I call you? (optional)"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            maxLength={20}
            aria-label="Your name"
          />
        </div>

        <div className="vibe-selector">
          <div 
            className={`vibe-option ${vibeMode === 'sweet' ? 'active' : ''}`} 
            onClick={() => setVibeMode('sweet')}
          >
            🍯 Sweet
          </div>
          <div 
            className={`vibe-option ${vibeMode === 'funny' ? 'active' : ''}`} 
            onClick={() => setVibeMode('funny')}
          >
            😄 Playful
          </div>
          <div 
            className={`vibe-option ${vibeMode === 'confident' ? 'active' : ''}`} 
            onClick={() => setVibeMode('confident')}
          >
            ✨ Confident
          </div>
          <div 
            className={`vibe-option ${vibeMode === 'shy' ? 'active' : ''}`} 
            onClick={() => setVibeMode('shy')}
          >
            🌸 Soft
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={handleStart}>
          Start 💬
        </button>
      </div>

      <EasterEgg />
    </div>
  );
};

export default Intro;