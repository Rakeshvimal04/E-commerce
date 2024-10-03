import React from 'react';
import product1 from '../assets/category1.jpg';
import product2 from '../assets/category.jpg';
import product3 from '../assets/pwood.jpg';
import product4 from '../assets/ewood.jpg';
import product5 from '../assets/special.jpg';
import './style.css'
import { useNavigate } from 'react-router-dom';
import mrf from '../assets/rightproduct-2.jpg'



const Product = () => {

    let productlist=[
        {id:1,Pname:"Wall Finish Interior",img:product1},
        {id:2,Pname:"Wall Finish Exterior",img:product2},
        {id:3,Pname:"Premium Wood Finish",img:product3},
        {id:4,Pname:"Economy Wood Finish",img:product4},
        {id:5,Pname:"special coating" ,img:product5}
    ]
    const navigate = useNavigate();  
    const handleViewProduct = () => {
        navigate('/productlist1');  
      };
  return (
    <>
    <div className="container mt-5">
    <section className="text-center bg-warning text-dark p-5 rounded">
      <h1 className="display-4">KGK (MRF Vapcour) Paints</h1>
      <p className="lead">High-quality paints with superior coverage and long-lasting finish.</p>
      <a href="/productlist1" className="btn btn-primary btn-lg mt-3">Buy Now</a>
    </section>

    <section className="mt-5">
      <h2>Why Choose MRF Vapcour Paints?</h2>
      <p className="lead">
        MRF Vapcour offers premium-quality paints suitable for all surfaces. Whether you’re 
        looking for durability, easy application, or a perfect finish, MRF Vapcour delivers 
        excellent results every time.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <img src={mrf} alt="MRF Vapcour Paints" className="img-fluid rounded w-75" />
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Superior Coverage and Smooth Finish</li>
            <li className="list-group-item">Eco-Friendly and Low VOC</li>
            <li className="list-group-item">Available in a Wide Range of Colors</li>
            <li className="list-group-item">Fade and Stain Resistant</li>
            <li className="list-group-item">Perfect for Interior and Exterior Surfaces</li>
          </ul>
        </div>
      </div>
    </section>

    <section className=" mt-5">
      <h2>Key Features</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="p-4">
            <h5>Excellent Durability</h5>
            <p>Designed to withstand the toughest conditions, both indoors and outdoors.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" p-4">
            <h5>Fast Drying</h5>
            <p>Quick-drying formula ensures faster application and less waiting time.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" p-4">
            <h5>Vibrant Colors</h5>
            <p>Choose from a variety of vibrant colors that last long and stay true.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="text-center mt-5 mb-5">
      <h2>Transform Your Space with MRF Vapcour</h2>
      <p className="lead">Get started with MRF Vapcour paints and experience the difference in quality and finish.</p>
      <a href="#" className="btn btn-lg btn-primary">Buy MRF Vapcour Now</a>
    </section>
  </div>
    <div className=' d-flex justify-content-center mt-5'>
        {
            productlist.map((product)=>{
                return(
                    <>
                    <div className='w-50 text-center product-card p-3'>
                    <img src={product.img} alt='products' className='rounded mx-auto d-block w-75 h-75 product-image'/>
                    <p className='text-center fw-medium '>{product.Pname}</p>
                    <button className='btn btn-primary' onClick={handleViewProduct}> view Product</button>
                    </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Product
