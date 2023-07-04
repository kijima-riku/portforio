import React from 'react';
import "../css/Countclock.css"
//操作間の時間を計測するタイマーのコンポーネント

interface countProps {
    countdown: number | null;
}

const CountClock: React.FC<countProps> = ({countdown}) => {
  return (
    <div className='countclock'>{countdown}秒以内に次の操作をしてください</div>
  )
}

export default CountClock
//ボタンクリック→フラグをtrueにしてカウントダウン開始