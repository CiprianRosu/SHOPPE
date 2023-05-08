import React from 'react'
import { images } from '../../constants'
import ProductsDetails from '../../components/ProductsDetails/ProductsDetails'


const Shop = () => {
  return (
<div className='shop'>
      <div className='filter'>
        <input/>
        <select>

        </select>

        <select>
          
        </select>
      </div>

      <div className='products'>

        <div className='first_line'>
          <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>

          <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>

          <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>
        </div>

        <div className='second_line'>
        <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>

          <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>

          <div className='shop_details'>
            <img src={images.img1} alt=""/>
            <ProductsDetails name= "Lira Earrings" price="$20,00"/>
          </div>
        </div>

      </div>

</div>
  )
}

export default Shop