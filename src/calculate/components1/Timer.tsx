import React, { useEffect} from 'react';
import '../css/Timer.css'

interface TimerProps {
  goal: number;
  count: number;
  time: number;
  setTime: Function;
  score: number;
}

const Timer: React.FC<TimerProps> = ( {count, goal, time, setTime, score} ) => {

  useEffect(() => {

      let interval: NodeJS.Timeout | null;
      interval = setInterval(() => {
        setTime((prevTime: number)=> prevTime + 1);
      }, 1000);


    if (count === goal || score <= 0) {
      clearInterval(interval);
    };

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [ time ]);

  return <div className='timer'>経過時間: {time}</div>;
};

export default Timer;