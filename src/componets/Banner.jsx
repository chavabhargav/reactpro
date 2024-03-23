import React from 'react'
import '../styles/banner.css'
const Banner = () => {
  return (
    <div>
        <div className='banner'>
        <div className="ban-right">
            <h1>Exclusive <br />offers for you</h1>
            <h3>ONLY ON BEST SELLER PRODUCTS</h3>
            <button>CHECK NOW</button>
        </div>
        <div className="ban-left">
            <div className="ban-img">
                <img src="/celeb.webp" alt="" />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Banner
