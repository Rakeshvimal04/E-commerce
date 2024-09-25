import React from 'react';
import product1 from '../assets/category1.jpg';
import product2 from '../assets/category.jpg';
import product3 from '../assets/pwood.jpg';
import product4 from '../assets/ewood.jpg';
import product5 from '../assets/special.jpg';
import './style.css'


const Product = () => {

    let productlist=[
        {id:1,Pname:"Wall Finish Interior",img:product1},
        {id:2,Pname:"Wall Finish Exterior",img:product2},
        {id:3,Pname:"Premium Wood Finish",img:product3},
        {id:4,Pname:"Economy Wood Finish",img:product4},
        {id:5,Pname:"special coating" ,img:product5}
    ]
  return (
    <div className='d-flex justify-content-center mt-5'>
        {
            productlist.map((product)=>{
                return(
                    <>
                    <div className='w-50 text-center product-card'>
                    <img src={product.img} alt='products' className='rounded mx-auto d-block w-75 h-75 product-image'/>
                    <p className='text-center fw-medium m-2'>{product.Pname}</p>
                    <button className='btn btn-primary p-2 mb-2'>view products</button>
                    </div>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default Product
