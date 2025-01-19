import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {
  const technozarre = "February 17, 2025";
  const targetDate = new Date(technozarre).getTime();

  return (
    <div className="timer-container">
      <FlipClockCountdown 
        to={targetDate} 
        className="flip-clock" 
        labels={['Days', 'Hours', 'Minutes', 'Seconds']} 
        labelStyle={{ fontSize: '1.5vw', color: '#333' }}
        digitBlockStyle={{
          backgroundColor: 'linear-gradient(90deg, rgb(195, 21, 21), rgb(57, 5, 89))',
          color: 'rgb(183, 183, 183)',
          borderRadius: '10px',
          width: '80px',
          height: '100px',
          margintop: '10px',
          margin: '5px',
          fontSize: '4rem',
          fontWeight: '900',
          boxShadow: '4px 8px 10px rgba(144, 10, 148, 0.61)',
        }}
        dividerStyle={{ color: 'rgb(43, 35, 54)', fontSize: '1.2rem' }}
        duration={0.85}
        
      />
    </div>
  );
};

export default Timer;
