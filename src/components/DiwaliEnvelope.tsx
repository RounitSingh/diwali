import  { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import './DiwaliEnvelope.css';

export default function DiwaliEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div className="diwali-container">
      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `float-down ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="envelope-wrapper">
        <div
          className={`envelope-container ${isOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleInteraction}
        >
          {/* Shadow */}
          <div className="envelope-shadow" />

          {/* Envelope body */}
          <div className="envelope-body">
            {/* Back fold */}
            <div className="envelope-back" />

            {/* Letter inside */}
            <div className="letter-inside">
              <div className="letter-content">
                <div className="letter-line-top" />
                <div className="letter-line-1" />
                <div className="letter-line-2" />
                <div className="letter-seal" />
              </div>
            </div>

            {/* Top flap */}
            <div className="envelope-flap" />

            {/* Front body */}
            <div className="envelope-front" />

            {/* Left fold */}
            <div className="envelope-left" />
          </div>

          {/* Hover/Tap text */}
          <p className="hover-text">
            {isMobile ? 'Tap to open your wish ✨' : 'Hover to open your wish ✨'}
          </p>

          {/* Message card */}
          <div className="message-card">
            <div className="message-content">
              {/* Diya SVG */}
              <div className="diya-container">
                <svg width="100%" height="100%" viewBox="0 0 64 64">
                  {/* Flame */}
                  <path
                    className="diya-flame"
                    d="M32 8 C32 8, 28 15, 28 20 C28 24, 30 26, 32 26 C34 26, 36 24, 36 20 C36 15, 32 8, 32 8Z"
                    fill="#FFD700"
                  />
                  <path
                    className="diya-inner-flame"
                    d="M32 10 C32 10, 29 15, 29 19 C29 22, 30.5 23, 32 23 C33.5 23, 35 22, 35 19 C35 15, 32 10, 32 10Z"
                    fill="#FF6B00"
                  />
                  {/* Diya Bowl */}
                  <ellipse cx="32" cy="35" rx="18" ry="6" fill="#CD853F" />
                  <path d="M14 35 Q14 42, 32 42 Q50 42, 50 35" fill="#8B4513" />
                  {/* Wick */}
                  <rect x="31" y="26" width="2" height="9" fill="#2C1810" />
                  {/* Decorative dots */}
                  <circle cx="20" cy="35" r="1.5" fill="#FFD700" />
                  <circle cx="26" cy="36" r="1.5" fill="#FFD700" />
                  <circle cx="38" cy="36" r="1.5" fill="#FFD700" />
                  <circle cx="44" cy="35" r="1.5" fill="#FFD700" />
                </svg>
              </div>

              {/* Message */}
              <h2 className="message-title">Happy Diwali Ritu😘</h2>
              
              <p className="message-text">
                May the festival of lights illuminate your life with joy, prosperity, and endless happiness. Wishing you a sparkling and blessed Diwali filled with love and laughter! ✨🪔
              </p>

              {/* Decorative border */}
              <div className="message-divider">
                <div className="sparkle-row">
                  <Sparkles className="sparkle-icon" style={{ color: '#ca8a04' }} />
                  <Sparkles className="sparkle-icon" style={{ color: '#ea580c' }} />
                  <Sparkles className="sparkle-icon" style={{ color: '#ca8a04' }} />
                </div>
              </div>

              {/* Rotating sparkles */}
              <div className="rotating-sparkle top-right">
                <Sparkles style={{ width: isMobile ? '20px' : '24px', height: isMobile ? '20px' : '24px', color: '#eab308' }} />
              </div>
              <div className="rotating-sparkle top-left">
                <Sparkles style={{ width: isMobile ? '20px' : '24px', height: isMobile ? '20px' : '24px', color: '#ea580c' }} />
              </div>
            </div>
          </div>

          {/* Fireworks effect */}
          {isOpen && (
            <>
              {[...Array(12)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 12;
                const distance = isMobile ? 150 : 200;
                return (
                  <div
                    key={i}
                    className="firework"
                    style={{
                      left: '50%',
                      top: '50%',
                      backgroundColor: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF6B00' : '#F97316',
                      animation: `explode 1.5s ease-out forwards`,
                      animationDelay: `${0.6 + i * 0.05}s`,
                      transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    }}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
