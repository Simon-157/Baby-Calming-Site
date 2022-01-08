import React , {useState} from 'react';
import GoodnightAudio from '../lullabies/lullabygoodnight.mp3'
import "../App.css"

function Goodnight (){
    const[Active, setActive] = useState(false)
    const[audio, setaudio] = useState(new Audio(GoodnightAudio))

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
                GoodNight
                <br></br>
                <br></br>
                <span className="frame-icon">
                    <span><img className="sooth-icon"  src="https://img.icons8.com/plasticine/100/000000/partly-cloudy-night.png" alt="Twinkle"/></span>      
                </span>
                
            </button>
       
       </div>
       </>
    )

}

export default Goodnight;