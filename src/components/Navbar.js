import React from 'react'
import Walk from '../images/walk.png'
import Dumbbell from '../images/dumbbell.png'
import Dome from '../images/dome.png'

const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <div className="listContainer">
                        <img src={Walk} alt="logo" />
                        <li><p>Steps</p></li>
                    </div>
                    <div className="listContainer">
                        <img src={Dumbbell} alt="logo" id="dumbshell"/>
                        <li><p>Workout</p></li>
                    </div>
                    <div className="listContainer">
                        <img src={Dome} alt="logo" />
                        <li><p>Nutrition</p></li>
                    </div>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar