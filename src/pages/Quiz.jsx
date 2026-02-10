import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader';
import { CONFIG } from '../config';

const Quiz = ({ userName, quizResults, setQuizResults }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < CONFIG.QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Calculate compatibility
      setTimeout(() => {
        setQuizResults(newAnswers);
        setShowResults(true);
      }, 300);
    }
  };

  const getCompatibilityMessage = () => {
    const messages = [
      "We might be onto something here 🌟",
      "The vibes are definitely vibing 💫",
      "Chemistry level: looking promising ✨",
      "This could work out pretty well 💭",
      "I'm seeing some serious potential here 🌹"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleContinue = () => {
    navigate('/question');
  };

  if (showResults) {
    return (
      <div className="chat-container">
        <ChatHeader name={userName} />
        
        <div className="chat-messages">
          <div className="message received">
            <div className="message-bubble">
              {getCompatibilityMessage()}
            </div>
            <div className="message-time">just now</div>
          </div>

          <div className="message received">
            <div className="message-bubble">
              Shall we see where this goes? 😊
            </div>
            <div className="message-time">just now</div>
          </div>
        </div>

        <div className="chat-input-area">
          <button 
            className="btn btn-primary btn-block" 
            onClick={handleContinue}
          >
            Continue 💬
          </button>
        </div>
      </div>
    );
  }

  const question = CONFIG.QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="chat-container">
      <ChatHeader name={userName} />
      
      <div className="chat-messages">
        <div className="message received">
          <div className="message-bubble">
            Quick compatibility check 😊
          </div>
          <div className="message-time">just now</div>
        </div>

        <div className="message received">
          <div className="message-bubble">
            Question {currentQuestion + 1} of {CONFIG.QUIZ_QUESTIONS.length}:
          </div>
          <div className="message-time">just now</div>
        </div>

        <div className="message received">
          <div className="message-bubble">
            {question.q}
          </div>
          <div className="message-time">just now</div>
        </div>
      </div>

      <div className="chat-input-area">
        <div className="selection-grid">
          {question.options.map((option, index) => (
            <div
              key={index}
              className="selection-item"
              onClick={() => handleAnswer(option.value)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswer(option.value)}
            >
              <div className="selection-label">{option.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;