//数値を計算する、手数を数える、カウントダウン
import React,{useEffect} from 'react';
import "../css/calculate.css"

interface calcProps{
  count: number;
  goal: number;
  setCount: (value : number) => void;
  countdown: number | null;
  setDown: Function;
  howmany: number;
  countHowmany: Function;
  score: number;
  setScore: Function;
  Plus_No1: number;
  Plus_No2: number;
  Kake_No1: number;
  Kake_No2: number;
};


const Calculate:React.FC<calcProps>= ({count, goal, setCount, countdown, setDown,howmany, countHowmany, score , setScore, Plus_No1, Plus_No2, Kake_No1, Kake_No2}) => {

  const PlusNumber:number = Plus_No1;
  const PlusNumber2:number = Plus_No2;
  const KakeNumber: number = Kake_No1;
  const KakeNumber2: number = Kake_No2;

    //計算
    const times = (i : number) => { //操作数の関数
      countHowmany((prevTimes: number) => prevTimes + i);
    }
    const increase = (time:number, Plus: number) => {
        times(time);
        return count + Plus;
        };
    const doubling = (Kake: number) => {
        times(1);
         return count * Kake;
        };

    const handleIncreaseOne = () => {
      setCount(increase(2, 1));
      setDown(3);
      setScore((prevscore:number) => prevscore - 50)
    };
    const handleIncraese = (Plus: number) => {
        return () => {
        setCount(increase(1, Plus));
        setDown(3);
        setScore((prevscore:number) => prevscore - 1)
      };
      };

    const handleDoubling = (Kake: number) => {
      return () => {
      if(count * Kake === goal) {
        setScore ((prevscore: number) => prevscore * Kake );
      }else{
      setScore((prevscore:number) => prevscore - 1)
      };
      setCount(doubling(Kake));
      setDown(3);
      };}

    const handleReset = () => {
        setCount(0);
      }
    //ボタン押すと３秒のカウントダウンが始まる処理
    useEffect(() => {
      let interval3:NodeJS.Timeout | null = null;
      /* useEffectではstateが、≠nullのときにタイマーを動し続けるように設定
      → bottunを押したときにstateを3（=3秒タイマーの開始値)に設定（下のhandleStart関数）
      → カウントが開始される

      → onClick属性には、stateを3に設定する処理のみを与えれば十分
      */
      if (countdown !== null && countdown > 0) {
        interval3 = setInterval(() => {
          setDown( (prevtime: number ) => prevtime - 1);  //アンマウント
        }, 1000);

      };
      if(count === goal || score <= 0){
        clearInterval(interval3!)
        setDown(null)
      }

      if (countdown! <= 0 && countdown !== null) {
        setScore((prevscore: number) => prevscore - 200 )
        setCount(0);
        setDown(null);
      }


      return () => {
        clearInterval(interval3!);
      };
    }, [ count, countdown ]);

  return (
    <div className='container_calc'>
        <button  className="calc" onClick={handleIncreaseOne}>+1</button>
        <button  className="calc" onClick={handleIncraese(PlusNumber)}>+{PlusNumber}</button>
        <button  className="calc" onClick={handleIncraese(PlusNumber2)}>+{PlusNumber2}</button>
        <button  className="calc" onClick={handleDoubling(KakeNumber)}>×{KakeNumber}</button>
        <button  className="calc" onClick={handleDoubling(KakeNumber2)}>×{KakeNumber2}</button>
        <button  className="reset" onClick={handleReset}>reset</button>
        <p className="howmany mt-4">{howmany}回操作しました</p>
    </div>
  )
}
export default Calculate;
