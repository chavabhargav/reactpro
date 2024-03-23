import React from 'react'
import '../styles/popular.css'
const Popular = () => {
  return (
    <div className='popular'>
      <div className="popular-heading">
        <h1>Popular Products</h1>
      </div>
      <div className="popular-items">
        <div className="item-card pr1">
          <div className="image-container">
            <img src="/s23ultra.jpg" alt="" />
          </div>
          <div className="product ">Samsung Galaxy S23Ultra</div>
          <div className="prices">
            <div className="new-price">$990</div>
            <div className="old-price">$1,099</div>
          </div>

        </div>
        <div className="item-card pr2">
          <div className="image-container">
            <img src="/iphone15.webp" alt="" />
          </div>
          <div className="product">Iphone 15 Pro max</div>
          <div className="prices">
            <div className="new-price">$999</div>
            <div className="old-price">$1,199</div>
          </div>

        </div>
        <div className="item-card pr3">
          <div className="image-container scaler">
            <img src="/pixel8.jpg" alt="" />
          </div>
          <div className="product">Pixel 8 pro</div>
          <div className="prices">
            <div className="new-price">$599</div>
            <div className="old-price">$799</div>
          </div>

        </div>
        <div className="item-card pr4">
          <div className="image-container">
            <img src="/asusrog.png" alt="" />
          </div>
          <div className="product">Asus Rog Phone 7</div>
          <div className="prices">
            <div className="new-price">$899</div>
            <div className="old-price">$1,099</div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Popular
