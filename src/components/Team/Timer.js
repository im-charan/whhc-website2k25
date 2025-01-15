import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {
  const technozarre = "February 18, 2025";
  const targetDate = new Date(technozarre).getTime();

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <FlipClockCountdown 
        to={targetDate} 
        className="flip-clock" 
        labels={['Days', 'Hours', 'Minutes', 'Seconds']} 
        labelStyle={{ fontSize: '16px', color: '#333', }}
        digitBlockStyle={{ backgroundColor: ' #5c0080', color: '#fff', borderRadius: '10px', width: '140px', height: '30vh', margin: '5px',
          fontSize: '40px', fontWeight: '50px'
         }}
        dividerStyle={{ color: 'rgb(43, 35, 54)' }}
        duration={0.85}
        
      />
    </div>
  );
};

export default Timer;
