import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={heropng} alt=''/> */}
        <div className='hero-left'>

        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
               <p>new</p> 
               {/* <img src{} alt=''/> */}
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
    <div className="hero-lates-btn">
        <div> Latest Collection</div>
        {/* <img src{} alt=''/> */}
    </div>
        </div>
        <div className="hero-right">
        {/* <img src{} alt=''/> */}

        </div>
    </div>
    
  )
}

export default Hero