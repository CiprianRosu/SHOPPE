import React from 'react'
import ProductsDetails from '../../components/ProductsDetails/ProductsDetails'
import StarRating from '../../components/StarRating/StarRating'
import {GrFavorite} from 'react-icons/gr'
import './ProductDetailsPage.css'
import {images} from '../../constants'
import { useState} from "react"
import {CiMail} from 'react-icons/ci'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai' 



const ProductDetailsPage = () => {
  const[selectedImg , setSelectedImg] = useState(0)
  const[quantity , setQuantity] = useState(1)

  const img = [images.img1, images.img2, images.img3, images.img4]
  return (
    
      <div className='product'>
        <div className='left'>
          <div className='images'>
              <img src={img[0]} alt="" onClick={e=>setSelectedImg(0)}/>
              <img src={img[1]} alt="" onClick={e=>setSelectedImg(1)}/>
              <img src={img[2]} alt="" onClick={e=>setSelectedImg(2)}/>
              <img src={img[3]} alt="" onClick={e=>setSelectedImg(3)}/>
          </div>

          <div className='mainImg'>
            <img src={img[selectedImg]} alt=""/>
          </div>
        </div>
        <div className='right'>
          <ProductsDetails name="Lira Earrings" price ="$20.00"/>
          <div className='rating'>
          <StarRating/>
          <span>1 customer review</span>
          </div>
          <div className='text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
          </div>
          <div className='btns'>
            <div className='quantity'>
              <button onClick = {()=>setQuantity(prev=>prev-1)} >-</button>
                   {quantity}
              <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
            </div>
           
          <button className="btn" type="submit">ADD TO CART</button>
          </div>
            <div className='some'>
              <div className='mail'>
              <GrFavorite/>
              </div>
              <div className='icons'>
                <CiMail/>
                <ImFacebook/>
                <AiOutlineInstagram/>
                <AiOutlineTwitter/>
              </div>
              
            </div>
            <div className='categ'>
              <div className='cat'>SKU:<span>12</span></div>
              <div>Categories:<span>Fashion Style</span></div>
            </div>
          
        </div>
      </div>

     

     
    
  )
}

export default ProductDetailsPage