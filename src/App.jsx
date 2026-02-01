import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CONFIG } from './config';
import Intro from './pages/Intro';
import Question from './pages/Question';
import YesBranch from './pages/YesBranch';
import NoBranch from './pages/NoBranch';
import Shy from './pages/Shy';
import Share from './pages/Share';
import Goodbye from './pages/Goodbye';
import Quiz from './pages/Quiz';
import FloatingHearts from './components/FloatingHearts';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [randomizerMode, setRandomizerMode] = useState(CONFIG.RANDOMIZER_DEFAULT);
  const [vibeMode, setVibeMode] = useState('sweet');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [quizResults, setQuizResults] = useState({});

  // Context object to pass down to all pages
  const appState = {
    userName: userName || CONFIG.DISPLAY_NAME,
    randomizerMode,
    setRandomizerMode,
    vibeMode,
    setVibeMode,
    selectedActivity,
    setSelectedActivity,
    selectedTime,
    setSelectedTime,
    quizResults,
    setQuizResults,
    setUserName
  };

  return (
    <Router>
      <div className="app">
        <FloatingHearts />
        <Routes>
          <Route path="/" element={<Intro {...appState} />} />
          <Route path="/question" element={<Question {...appState} />} />
          <Route path="/yes" element={<YesBranch {...appState} />} />
          <Route path="/no" element={<NoBranch {...appState} />} />
          <Route path="/shy" element={<Shy {...appState} />} />
          <Route path="/share" element={<Share {...appState} />} />
          <Route path="/goodbye" element={<Goodbye {...appState} />} />
          <Route path="/quiz" element={<Quiz {...appState} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;