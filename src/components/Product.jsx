import React from 'react'
import mycar from "../assets/photo-150 - Copy.avif"
import mycar2 from "../assets/photo-111111.avif"

const Product = () => {
  return (
    <div>
       <img src={mycar} alt="mycar" />
       <img src={mycar2} alt="mycar2" />
    </div>
  )
}

export default Product;