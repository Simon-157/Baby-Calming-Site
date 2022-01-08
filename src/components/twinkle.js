import React , {useState} from 'react';
import TwinkleAudio from '../lullabies/twinkle.mp3'
import "../App.css"

function Twinkle (){
    const [Active, setActive] = useState(false)
    const [audio, setAudio] = useState(new Audio(TwinkleAudio))

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
                TwinkleTwinkle
                <br></br>
                <br></br>
                <span className="frame-icon">
                    <span><img className="sooth-icon"  src="https://img.icons8.com/ios-filled/100/000000/star-of-bethlehem.png" alt="Twinkle"/></span>      
                </span>
                
            </button>
       
       </div>
       </>
    )

}

export default Twinkle;