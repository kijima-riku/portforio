import React,{ useEffect } from 'react'
import "../css/Point.css"

interface PointProps{
    score: number;
    setScore: Function;
    time: number;
    deadFlug: boolean;
    setDeadFlug: Function;
    allreset: () => void;
    restart: () => void;
}

const Point :React.FC<PointProps> = ({score, setScore, time, deadFlug, setDeadFlug, allreset, restart, }) => {




    useEffect(() => {
        if(time > 0){
            setScore((prevscore: number) => prevscore - 1)
        };
        if(score <= 0){
            setDeadFlug(true);
        };
    }, [time])

  return (
    <>
        {deadFlug && (
          <>
            <div className='dead_container'>
              <div className="gameover" >GAME OVER</div>
              <button className="restart" onClick={restart}>⇨同条件で再挑戦</button>
              <button className="allreset" onClick={allreset}>⇨違う条件で再挑戦</button>
            </div>
            <div className="overlay"></div>
          </>
        )}

        <div className="score">スコア:{score}</div>
    </>
  )
}

export default Point;