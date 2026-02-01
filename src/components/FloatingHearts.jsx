import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4
      };
      return heart;
    };

    const interval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev, createHeart()];
        return newHearts.slice(-8); // Keep max 8 hearts
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          💗
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;