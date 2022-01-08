
import "../App.css"
import Twinkle from "./twinkle";
import Pretty from "./prettylittle";
import Goodnight from "./goodnight";
import Rockbaby from "./rockbaby";
import Melody from "./Melody";
import Navbar from "./Navbar";
import Footer from "./footer";
import Schedule from "./schedule";

function Soothings(){
    return(
        <>
            <div >
                <Navbar />
                <marquee  direction=" left"  scrollamount="6">
                         Hi little berry baby enjoy and always be happy
                </marquee>
                <div className="bg bg2">
                    <div className="bg bg3">
                    
                        <section className="sooths">
                            <div className="sooth-grid"><Twinkle /></div>
                            <div className="sooth-grid"><Goodnight /></div>
                            <div className="sooth-grid"><Pretty /></div>
                            <div className="sooth-grid"><Rockbaby /></div>
                            <div className="sooth-grid"><Melody /></div>
                            <div className="sooth-grid"><Schedule /></div>
                        </section>
                    
                    </div>
                </div>

            </div>
            <section>
                <div className="footer-style">
                    <Footer />
                </div>
                
            </section>

        
        </>
    )
}

export default Soothings;