import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {
  const technozarre = "February 17, 2025";
  const targetDate = new Date(technozarre).getTime();

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <FlipClockCountdown 
        to={targetDate} 
        className="flip-clock" 
        labels={['Days', 'Hours', 'Minutes', 'Seconds']} 
        labelStyle={{ fontSize: '26px', color: '#333', }}
        digitBlockStyle={{ backgroundColor: ' #5c0080', color: '#fff', borderRadius: '10px', width: '140px', height: '30vh', margin: '5px',
          fontSize: '100px', fontWeight: '800',boxShadow: '4px 8px 10px rgba(216, 5, 5, 0.4)',
         }}
        dividerStyle={{ color: 'rgb(43, 35, 54)' }}
        duration={0.85}
        
      />
    </div>
  );
};

export default Timer;