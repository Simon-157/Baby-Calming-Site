import React , {useState} from 'react';
import PrettyAudio from '../lullabies/prettylittlehorses.mp3'
import "../App.css"

function Pretty (){
    const[Active, setActive] = useState(false)
    const[audio, setaudio] = useState(new Audio(PrettyAudio))

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
                Prettylittle
                <br></br>
                <br></br>
                <span className="frame-icon">
                    <span><img className="sooth-icon" src="https://img.icons8.com/doodle/50/000000/pretty-woman.png"alt="Twinkle"/></span>    
                </span>
                
            </button>
       
       </div>
       </>
    )

}

export default Pretty;