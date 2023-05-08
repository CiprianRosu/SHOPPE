import React from 'react'
import {images} from '../../constants'
import './Home.css'
import ProductsDetails from '../../components/ProductsDetails/ProductsDetails'

const Home = () => 
  (
  <div>
    
    <div style={{ backgroundImage:`url(${images.banner})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:646,width:1248
    }}>

      <div className='home'>
        <h1>Gold big hoops</h1>
        <p>$68,00</p>
        <button>View Product</button>
      </div> 

    </div>
    <div className='top-grid'>
      <div>
        <h1>
          Shop the latest
        </h1>
      </div>

      <div>
        <p>
          View all
        </p>
      </div>
    </div>
    <div className='grid'>

      <div className='cards'> 
        <div className='details'>
        <img src={images.img1} alt=""/>
        <ProductsDetails name= "Lira Earrings" price="$20,00"/>
        </div>

        <div className='details'>
        <img src={images.img2} alt=""/>
        <ProductsDetails name="Hal Earrings" price="$25,00" />
        </div>

        <div className='details'>
        <img src={images.img3} alt=""/>
        <ProductsDetails name="Kaede Hair Pin Set Of 3 " price="$30,00"/>
        </div>
      </div>

      <div className='cards'> 
        <div className='details'>
        <img src={images.img1} alt=""/>
        <ProductsDetails name= "Lira Earrings" price="$20,00"/>
        
        </div>

        <div className='details'>
        <img src={images.img2} alt=""/>
        <ProductsDetails name="Hal Earrings" price="$25,00" />
        
        </div>

        <div className='details'>
        <img src={images.img3} alt=""/>
        <ProductsDetails name="Kaede Hair Pin Set Of 3 " price="$30,00"/>
        
        </div>
      </div>

    </div>    
  </div>

    
      
    
    
  )

export default Home