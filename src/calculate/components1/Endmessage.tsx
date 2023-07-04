import React, { useEffect } from 'react';
import '../css/Endmessage.css';

interface messageProps{
    count: number;
    goal: number;
    score: number;
    clearFlug: boolean;
    setClearFlug: Function;
    allreset: () => void;
    restart: () => void;
}

const Endmessage:React.FC<messageProps> = ({count, goal, score, clearFlug, setClearFlug, allreset, restart }) => {

    useEffect(()=>{
        if(count === goal){
            setClearFlug(true);
        };
    },[ count ])

  return (
    <>
        {clearFlug && (
            <>
                <div className="clear_container">
                    <div className='message' >CLEAR!</div>
                    <div className='clear_score'>score:{score}</div>
                    <button onClick={restart} className="restart">⇨同条件で再挑戦</button>
                    <button onClick={allreset} className='allreset'>⇨違う条件で再挑戦</button>
                </div>
                <div className="overlay"></div>
            </>
            )}
    </>
  )
}

export default Endmessage