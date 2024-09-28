import React, { useState } from 'react';
import './productlist.css';
import product11 from './images/p11.png'
import product12 from './images/p12.png'
import product13 from './images/p13.png'
import product14 from './images/p14.png'

import aquaname from './images/Aquafresh_Wall-Primer-wh.png'
import  altura  from './images/altura-wall-primer.png' 
import wallExterior from './images/Wall-Primer_Ext.png'
import wallInterior from './images/Wall-Primer_Int.png'

function Productlist1() {
  const [selectedImage, setSelectedImage] = useState(1);
  const handleImageClick = (imageNumber) => {
    setSelectedImage(imageNumber);
  };

  return (
    <>
    <div>
        <h1 className='magiccolorbg text-center '>Experience the Magic of colors</h1>
      <div className='p-list1 d-flex'>
        <img src={product14} alt="altura" className='plist-img' onClick={() => handleImageClick(1)} />
        <img src={product12} alt="wall primer exterior" className='plist-img' onClick={() => handleImageClick(2)} />
        <img src={product13} alt="wall primer interior" className='plist-img'onClick={() => handleImageClick(3)} />
        <img src={product11} alt="aqua fresh" className='plist-img' onClick={() => handleImageClick(4)} />
      </div>
    </div>

    <div>
        {selectedImage === 1 && 
        <div className='productdetails text-center p-2  '>
          <img src={aquaname}  className='my-3' width="250px"/>
          <h5 className=' text-center text-white m-3 '>WATER BASED POLYURETHANE WALL PRIMER <br/>FOR INTERIORS AND EXTERIORS</h5>

          </div>}

        {selectedImage === 2 && <div className='productdetails text-center p-2  '>
          <img src={wallExterior}  className='my-3' width="250px"/>
          <h5 className=' text-center text-white m-3 text-justify'>ECONOMICAL WATER BASED WALL PRIMER PAINT<br/>FOR INTERIORS</h5>
          </div>}
        {selectedImage === 3 && <div className='productdetails text-center p-2  '>
          <img src={wallInterior}  className='my-3' width="250px"/>
          <h5 className=' text-center text-white m-3 text-justify'>ECONOMICAL WATER BASED WALL PRIMER FOR <br/> INTERIORS</h5>
          </div>}
        {selectedImage === 4 &&<div className='productdetails text-center p-2  '>
          <img src={altura}  className='my-3' width="250px"/>
          <h5 className=' text-center text-white m-3 text-justify'>2-in-1 WATER BASED ACRYLIC WALL PRIMER FOR <br/>INTERIORS/EXTERIORS</h5>
          </div>}

    </div>
    </>
  )
}

export default Productlist1
