import React from 'react';
import '../App.css';
import Schedule from "./schedule.js";

export function Navbar(){

    return(
        <section className="nav-bar">
            <nav className="nav-items">
            <p className="logo">🧞‍♀️ CalmBaby</p> 
                <ul className="nav-list"> 
                    <li className="list">Home</li>
                    <li className="list">About</li>
                    <button onClick={Schedule} className="list">Schedule</button>
                    <li className="list">Membership</li>
                    <button className="list">Learn</button>
                </ul>
            </nav>

        </section>
    );
}

export default Navbar;