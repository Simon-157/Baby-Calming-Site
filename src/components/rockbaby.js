import React , {useState} from 'react';
import RockbabyAudio from '../lullabies/rockabyebaby.mp3'
import "../App.css"

function Rockbaby (){
    const[Active, setActive] = useState(false)
    const[audio, setaudio] = useState(new Audio(RockbabyAudio))

    audio.loop = true
    audio.volume = 1


    async function regulatePlay () {
        await audio.play();
        setActive(true)
        // Do something asynchronous
    }


    function regulatePause(){
        audio.pause();
        setActive(false)
    }

    return(
        <>
        <div className="lullaby-frame">
            <button onClick={Active ? regulatePause : regulatePlay} 
                className={Active ? "frame-button" : "frame-button-false"} >
                Rockabyebaby
                <br></br>
                <br></br>
                <span className="frame-icon">
                    <span><img className="sooth-icon" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-rock-event-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="Twinkle"/></span>     
                </span>
        
            </button>
       
       </div>
       </>
    )

}

export default Rockbaby;