import React, { useState } from 'react';
import './productlist.css';
import product11 from './images/p11.png'
import product12 from './images/p12.png'
import product13 from './images/p13.png'
import product14 from './images/p14.png'

import aquaname from './images/Aquafresh_Wall-Primer-wh.png'
import altura from './images/altura-wall-primer.png'
import wallExterior from './images/Wall-Primer_Ext.png'
import wallInterior from './images/Wall-Primer_Int.png'

// product png 
import aquafreshp from './images/Aquafresh_Wall-Primer-prod.png'


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
          <img src={product13} alt="wall primer interior" className='plist-img' onClick={() => handleImageClick(3)} />
          <img src={product11} alt="aqua fresh" className='plist-img' onClick={() => handleImageClick(4)} />
        </div>
      </div>

      <div>
        {selectedImage === 1 &&
          <>
            <div className='productdetails text-center p-2  '>
              <img src={aquaname} className='my-3' width="250px" />
              <h5 className=' text-center text-white m-3 '>WATER BASED POLYURETHANE WALL PRIMER <br />FOR INTERIORS AND EXTERIORS</h5>
            </div>

            <div className='  productlisttop'>
              <img src={aquafreshp} className=' itemimage' />
              <p className=''>Pack Sizes</p>
              <p></p>

              <div>
                <div >
                  <h4>Surface Preparation</h4>
                  <p>Ensure that the surface is clean and free from dampness, dirt and other contamination.</p>

                  <p>Sand the surface using #180 Sandpaper and clean thoroughly. Ensure that no loose particles are sticking to the wall</p>

                  <p>For areas severely affected by algae and fungi, ensure that the surface is completely cleaned before initiating the painting process</p>

                  <p>Freshly plastered surfaces must be allowed to cure completely. The coating process can be started after a minimum period of 30 days.</p>
                </div>
                <div>
                  <h4>Thinning</h4>
                  <ul >
                    <li>
                      <p>Stir well before thinning the Paint</p>
                    </li>
                    <li>
                      <p>Mix 35 - 45% of potable water</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Application Procedure</h4>
                  <h5>For Interior Walls</h5>

                  <p >Ensure that fresh walls are coated with one or two coats of white cement</p>

                  <p >Apply 2 coats of AquaFresh Wall Primer with an interval of 4 - 5 hrs between subsequent coats</p>

                  <p >Undulations in the wall can be levelled using any good quality acrylic putty or cement based putty</p>

                  <p >Sanding of the first / second coat of Aquafresh Wall Primer can be done using #320 Sandpaper</p>

                  <p >Topcoat can be applied after an interval of 4 - 5 hrs of the second coat of AquaFresh Wall Primer</p>

                  <h5>For Exterior Walls</h5>

                  <p>Ensure that fresh walls are coated with one or two coats of white cement</p>

                  <p >Apply 1 to 2 coats of AquaFresh Wall Primer with an interval of 4 - 5 hrs between subsequent coats</p>

                  <p >Sanding of the second coat of AquaFresh Wall Primer can be done using #320 Sandpaper</p>

                  <p >Topcoat can be applied after an interval of 4 - 5 hrs of the second coat of AquaFresh Wall Primer</p>
                </div>
              </div>
            </div>
          </>}

        {selectedImage === 2 && <div className='productdetails text-center p-2  '>
          <img src={wallExterior} className='my-3' width="250px" />
          <h5 className=' text-center text-white m-3 text-justify'>ECONOMICAL WATER BASED WALL PRIMER PAINT<br />FOR INTERIORS</h5>
        </div>}
        {selectedImage === 3 && <div className='productdetails text-center p-2  '>
          <img src={wallInterior} className='my-3' width="250px" />
          <h5 className=' text-center text-white m-3 text-justify'>ECONOMICAL WATER BASED WALL PRIMER FOR <br /> INTERIORS</h5>
        </div>}
        {selectedImage === 4 && <div className='productdetails text-center p-2  '>
          <img src={altura} className='my-3' width="250px" />
          <h5 className=' text-center text-white m-3 text-justify'>2-in-1 WATER BASED ACRYLIC WALL PRIMER FOR <br />INTERIORS/EXTERIORS</h5>
        </div>}

      </div>
    </>
  )
}

export default Productlist1
