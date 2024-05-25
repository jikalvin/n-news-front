import React from 'react';

const LoadingScreen = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    animation: 'backgroundPulse 2s infinite',
  };

  const svgStyle = {
    width: '200px',
    height: '200px',
  };

  const textStyle = {
    fill: '#fff',
    fontFamily: 'Arial',
    fontSize: '24px',
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    animation: 'blink 1.5s infinite',
  };

  return (
    <div style={containerStyle}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        style={svgStyle}
      >
        <rect width="100" height="100" fill="#f11946" />
        <text
          x="50%"
          y="50%"
          style={textStyle}
        >
          N-NEWS
        </text>
        <style>
          {`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0.5; }
              100% { opacity: 1; }
            }
            @keyframes backgroundPulse {
              0% { background-color: #ffffff; }
              50% { background-color: #f8f8f8; }
              100% { background-color: #ffffff; }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default LoadingScreen;
