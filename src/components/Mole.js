import { useEffect, useState } from 'react';
import mole from '../mole.png';

export default function Mole(props){
    let [hideAfterTime, setHideAfterTime] = useState(Math.floor(Math.random() * 4500 + 500));
const isPaused = props;
useEffect (() => {
    const hideMoleAfter =  !isPaused ? hideAfterTime : Math.floor(Math.random() * 4500 + 500);
const timer = setTimeout(() => {
props.setIsShowing(false);
}, hideMoleAfter);

    if (isPaused) {
       setHideAfterTime(hideMoleAfter);
       clearTimeout(timer);
    } else {

    }

return () => {
    clearTimeout(timer);
}


}, [isPaused])

return <img alt='mole' className='mole' src={mole} onClick={props.moleClicked} />





}