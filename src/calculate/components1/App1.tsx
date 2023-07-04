import React,{ useState } from 'react';
import '../css/App1.css';
import Calculate from '../components1/calculate';
import Timer from '../components1/Timer'
import CountClock from '../components1/CountClock';
import Endmessage from '../components1/Endmessage';
import Point from '../components1/Point';
import Howto from '../components1/Howto';
import Header from '../../header';
import kokuban from "../../photo/kokuban.png"


const  App1:React.FC = props => {
  //目標の数字
  const [goal, setGoal] = useState<number>(Math.floor(Math.random() * 500) + 101);
  //ボタンの数字
  const random = (max:number, min:number) =>{
    return Math.floor(Math.random()* max) + min;
  };
    const [Plus_No1, setPlusNumber1] = useState<number>((random(4, 1)) *2);
    const [Plus_No2, setPlusNumber2] = useState<number>((random(4, 1)) *2 +1);
    const [Kake_No1, setKakeNumber1] = useState<number>((random(2,1)) * 2);
    const [Kake_No2, setKakeNumber2] = useState<number>((random(2,1)) * 2 +1);
    //自分が計算中の数字
  let [count, setCount] = useState<number>(0);
  //３秒のカウントダウンタイマー
  const [countdown, setDown] = useState<number | null>(null);
  //全体の時間
  const [time, setTime] = useState(0);
  //操作数
  const [howmany, countHowmany] = useState<number>(0);
  //スコア
  const [score, setScore] = useState(1000);
  //失敗時のメッセージ表示
  const [deadFlug, setDeadFlug] = useState(false);
  //成功時のメッセージ表示
  const [clearFlug, setClearFlug] = useState(false);


  //「同じ条件で再挑戦」の関数
  const restart = () => {
    setTime(0);
    setScore(1000);
    setCount(0);
    countHowmany(0);
    setDeadFlug(false);
    setClearFlug(false)
};

  //「違う条件で再挑戦」の関数
  const allreset = () => {
    setTime(0);
    setScore(1000);
    setCount(0);
    countHowmany(0);
    setGoal(Math.floor(Math.random() * 500) + 101);
    setPlusNumber1((random(4, 1)) *2);
    setPlusNumber2((random(4, 1)) *2 +1);
    setKakeNumber1((random(2,1)) * 2);
    setKakeNumber2((random(2,1)) * 2 +1);
    setDeadFlug(false);
    setClearFlug(false);
};




  return (
    <>
      <Header />
      <div className="calculate">
        <h1 className="calcTitle">暗算をマスターしよう！</h1>
        <p className='goal'>GOAL: {goal}</p>
        <p className='count'>{count}</p>
        <Calculate count= {count} goal={goal} setCount= {setCount}  countdown={countdown} setDown={setDown} howmany={howmany} countHowmany={countHowmany} score={score} setScore={setScore}
        Plus_No1={Plus_No1} Plus_No2={Plus_No2} Kake_No1={Kake_No1} Kake_No2={Kake_No2}/>
        <Point score={score} setScore={setScore} time={time}  deadFlug={deadFlug} setDeadFlug={setDeadFlug} allreset={allreset} restart={restart}/>
        <Timer count={count} goal={goal} time={time} setTime={setTime} score={score}/>
        <CountClock countdown={countdown}/>
        <Endmessage count={count} goal={goal} score={score} clearFlug={clearFlug} setClearFlug={setClearFlug} allreset={allreset} restart={restart}/>
        <Howto setDeadFlug={setDeadFlug} setClearFlug={setClearFlug}/>
        <img src={kokuban} alt="" className='kokuban'/>
      </div>
      </>
        );
}

export default App1;
