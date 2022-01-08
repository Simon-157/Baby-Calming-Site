import React , {useState} from 'react';
import MellodyAudio from '../lullabies/melodypreview.mp3'
import "../App.css"

function Melody (){
    const[Active, setActive] = useState(false)
    const[audio, setaudio] = useState(new Audio(MellodyAudio))

    audio.loop = true
    audio.volume = 1

    // Do something asynchronous
    async function regulatePlay () {
        await audio.play();
        setActive(true)
        
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
                Melody
                <br></br>
                <br></br>
                <span className="frame-icon">
                    <span><img className="sooth-icon" src="https://img.icons8.com/ios-glyphs/30/000000/swing.png" alt="Melody"/></span>    
                </span>
                
            </button>
       
       </div>
       </>
    )

}

export default Melody;