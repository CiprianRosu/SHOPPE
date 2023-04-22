import React from 'react'
import './ProductsDetails.css'


const ProductsDetails = ({name , price}) => {
  return (
    <div className='details'>
      
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductsDetails