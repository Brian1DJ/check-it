import { useState } from 'react';
import { CONFIG } from '../config';

const EasterEgg = () => {
  const [clicks, setClicks] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState('');

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 5 && !isUnlocked) {
      setIsUnlocked(true);
      generateCompliment();
    }
  };

  const generateCompliment = () => {
    const randomCompliment = CONFIG.EASTER_EGG_COMPLIMENTS[
      Math.floor(Math.random() * CONFIG.EASTER_EGG_COMPLIMENTS.length)
    ];
    setCurrentCompliment(randomCompliment);
  };

  const closeModal = () => {
    setIsUnlocked(false);
    setClicks(0);
  };

  return (
    <>
      <div 
        className="easter-egg-trigger" 
        onClick={handleClick}
        aria-label="Secret button"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      />
      
      {isUnlocked && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>
              ✨ You Found Me! ✨
            </h2>
            <p style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--accent-pink)' }}>
              {currentCompliment}
            </p>
            <button className="btn btn-primary" onClick={generateCompliment}>
              Another one 💫
            </button>
            <button 
              className="btn btn-ghost" 
              onClick={closeModal}
              style={{ marginTop: '12px', display: 'block', width: '100%' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEgg;