import { useEffect, useRef, useState } from 'react';
import '../style.css';
import img1 from '../../assets/ipl_homepage.jpg';
import img2 from '../../assets/new-banner1.jpg';
import img3 from '../../assets/new-banner.jpg';
import img4 from '../../assets/new-banner2.jpg';
import img5 from '../../assets/new-banner3.jpg'

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
    }]
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
  console.log(current);
  return (
    <>
   
      <div className="carousel d-flex mt-3"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}>
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
                    index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h1 className='mt-5 text-center '>Looking to paint your home? Ask for....</h1>
        <div className='d-flex justify-content-center '>
          {/* <div className=' border  m-5'><a>Free Sample</a> </div>
          <div className='  border m-5'><a>Paint Review</a></div> */}
            <div class="btn1 btn-4 mx-5 mt-5">Free Sample</div>
            <div class="btn1 btn-4 mx-5 mt-5">Paint Review</div>
        </div>
      </div>
    </>
  )

}

export default Home;


