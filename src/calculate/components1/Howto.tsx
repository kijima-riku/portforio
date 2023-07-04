import React,{ useState  } from 'react'
import "../css/Howto.css";
import kokuban from "../../photo/kokuban.png"

interface howtoProps {
    setClearFlug: Function;
    setDeadFlug: Function;
}

const Howto: React.FC<howtoProps> = ( { setClearFlug,setDeadFlug } ) => {

    const [howtoFlug, setHowtoFlug] = useState<boolean>(false);

    const howto = () => {
        setHowtoFlug(true);
        if(setClearFlug){setClearFlug(false)};
        if(setDeadFlug){setDeadFlug(false)};
    };
    const close = () => {
        setHowtoFlug(false);
        setDeadFlug(false);
        setClearFlug(false);
        }


  return (
    <>
        <div className='play'>
            <button onClick={howto} className="rule_button text-white font-bold py-1 px-3">→遊び方はこちら</button>
            {howtoFlug &&
            <div className="howto">
                <h3 className="howtotitle">遊び方</h3>
                <div className='description'>
                    <ul className='sentence'>設定された数字を付与されたボタンを用いて導き出します</ul>
                    <ul className='sentence'>計算を始めたら３秒以内に次の操作をしないと、値がリセットされてしまいます。</ul>
                    <ul className='sentence'>時間が経ったり、リセットされたり、ボタンを押す度にスコアが減っていくのでご注意を！</ul>
                    <ul className='sentence'>最後の操作が掛け算でゴールすると最終スコアが倍増します</ul>
                    <ul className='sentence'>スコアが0になる前に計算を終えましょう！</ul>
                    <button onClick={close} className='back_button'>→戻る</button>
                </div>
                <img src={kokuban} alt="" className='kokuban'/>
            </div>}
        </div>
    </>
  )
}

export default Howto