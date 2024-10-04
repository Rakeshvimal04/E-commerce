import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kgk.png'
import "./style.css";
import img1 from "../assets/ipl_homepage.jpg";
import img2 from "../assets/new-banner1.jpg";
import img3 from "../assets/new-banner.jpg";
import img4 from "../assets/new-banner2.jpg";
import img5 from "../assets/new-banner3.jpg";
import Product from "./product";
import product1 from '../assets/category1.jpg';
import product2 from '../assets/category.jpg';
import product3 from '../assets/pwood.jpg';
import product4 from '../assets/ewood.jpg';
import product5 from '../assets/special.jpg';

function Home() {
  let [name, setName] = useState("");
  let count = useRef(0);
  const infoCarousel = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
  ];
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5500);
  });

  const slideRight = () => {
    setCurrent(current === infoCarousel.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? infoCarousel.length - 1 : current - 1);
  };
  // console.log(current);
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
  // added for testing purpose
  // const viewabout = () => {
  //   navigate('/about');  
  // };const viewcontact = () => {
  //   navigate('/contact');  
  // };const viewproduct = () => {
  //   navigate('/product');  
  // };const viewgallery = () => {
  //   navigate('/gallery');  
  // };
  return (
    <>
      <div
        className="carousel d-flex mt-3  mx-3"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="carousel_wrapper">
          {infoCarousel.map((image, index) => {
            return (
              /* (condition) ? true : false */

              <div
                key={index}
                className={
                  index == current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={image.image} alt="" />
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
          <div className="carousel_pagination">
            {infoCarousel.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-5 text-center ">
          Looking to paint your home? Ask for....
        </h1>
        <div className="d-flex justify-content-center ">
          {/* <div className=' border  m-5'><a>Free Sample</a> </div>
          <div className='  border m-5'><a>Paint Review</a></div> */}
          <div class="btn1 btn-4 mx-5 mt-5">Free Sample</div>
          <div class="btn1 btn-4 mx-5 mt-5 "><a href="#reviews" className="text-dark">Paint Review</a></div>
        </div>
      </div>
      {/* <Product /> */}
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
      <div className="review col-12 col-lg-10 col-md-10 col-sm-8 d-flex justify-content-center align-items-center mx-5" id="reviews">
        <div className="col-10 col-lg-12 col-md-10 col-sm-12 review-body mx-5">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25469789"
            frameborder="0"></iframe>
        </div>
      </div>      
      {/* <button onClick={viewabout}>about</button>
      <button onClick={viewcontact}>contact</button>
      <button onClick={viewgallery}>gallery</button>
      <button onClick={viewproduct}>product</button> */}

    </>
  );
}

export default Home;
