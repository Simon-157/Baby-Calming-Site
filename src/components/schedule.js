import React , {useState} from 'react';

import "../App.css"

const Schedule = () => {
    const[count, setCount] = useState(0);

    const Increament = () => {
        setCount(count +1 );
    }


    const Decreament = () => {
        if (count >0)
            setCount(count-1);
        
    }
    return (
        <div className='schedule-frame'>
          <button className='btn1'  onClick={Increament}>+</button>
          <h3>{count}</h3>
          <button className='btn1' onClick={Decreament}>-</button>
        </div>
      )
}

export default Schedule;