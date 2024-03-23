
import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className='hero anim'>
      
        <div className="hero-left">
            <h2 className='anim'>EXCLUSIVE ARRIVALS <hr/></h2>
            <div>
                <h1 className='anim'>New</h1>
                <h1 className='anim'>Gadgets</h1>
                <h1 className='anim'>for Everyone</h1>
            </div>
            <div className="hero-button">
            <button className='anim'>Buy now</button>
            </div>
                
        </div>
        
        <div className="hero-right">
            <img src="/headset.png"  className='anim' alt="" />
        </div>
      
      
    </div>
  )
}

export default Hero