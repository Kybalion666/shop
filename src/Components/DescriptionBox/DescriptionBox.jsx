import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>  
      <div className="descriptionbox-description">
        <p>Discover our fashionable clothing collection that combines style, comfort, and quality. 
            We offer a wide range of apparel for every occasion. From casual wear to formal attire, we have the perfect outfit for you.  
            Our selection includes trendy tops, elegant dresses, stylish jeans, cozy sweaters, and versatile accessories. Whether you're looking for the latest fashion trends or timeless classics, you'll find something that suits your taste.  
            Experience the ultimate blend of fashion and functionality with our diverse range of clothing. We prioritize both aesthetics and comfort in our designs. Explore our clothing store and enhance your wardrobe with pieces that reflect your unique style. 
            At Adam Kayumov, we believe that fashion is a form of self-expression, and we're here to help you make a statement with your attire. Visit our store today to find the perfect outfit that fits your personality and lifestyle."</p>
      </div>
    </div>
  )
}

export default DescriptionBox