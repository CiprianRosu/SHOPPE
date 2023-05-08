import React from 'react'
import './ProductsDetails.css'


const ProductsDetails = ({name , price}) => {
  return (
    <div className='details'>
      
      <p className='name'>{name}</p>
      <p className='color'>{price}</p>
    </div>
  )
}

export default ProductsDetails