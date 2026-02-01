import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/chatHeader';

const Goodbye = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="chat-container">
      <ChatHeader name="System" status="offline" />
      
      <div className="chat-messages" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
        padding: '40px 20px'
      }}>
        <div style={{ 
          fontSize: '64px',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          💗
        </div>
        
        <div className="message received" style={{ maxWidth: '100%' }}>
          <div className="message-bubble">
            All good — have a lovely Valentine's week 🌸
          </div>
        </div>

        <div className="message received" style={{ maxWidth: '100%' }}>
          <div className="message-bubble">
            No hard feelings. Take care of yourself ✨
          </div>
        </div>
      </div>

      <div className="chat-input-area">
        <button 
          className="btn btn-ghost btn-block" 
          onClick={handleRestart}
        >
          ← Restart from beginning
        </button>
      </div>
    </div>
  );
};

export default Goodbye;