import React, { useState, useRef } from 'react';

export default function SplashVideo({ onFinish }) {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleEnded = () => {
    setFadeOut(true);
    setTimeout(onFinish, 500);
  };

  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    setFadeOut(true);
    setTimeout(onFinish, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '8px 20px',
          background: 'rgba(255,255,255,0.15)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontFamily: 'inherit',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        Skip
      </button>
    </div>
  );
}
