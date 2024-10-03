
import about from '../assets/aboutemp.jpg';
import ownerpic from '../assets/kgkowner.jpg';
function Aboutus(){
    return(
        <>
          <div className="container mt-5">
      <section className="text-center bg-primary text-white p-5 rounded">
        <h1 className="display-4">About KGK (MRF Vapcour)  Paints</h1>
        <p className="lead">Delivering excellence in paint technology for over 5 years.</p>
      </section>

      <section className="mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={about} alt="MRF Vapcour Mission" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p className="lead">
              At MRF Vapcour, we are committed to providing the highest quality paints and coatings 
              that enhance and protect your spaces. Our mission is to innovate with sustainable, 
              eco-friendly solutions while ensuring superior durability, vibrant colors, and long-lasting performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2>Our Journey</h2>
        <p>
          Founded in 2020,KGK (MRF Vapcour) started as a small paint manufacturing unit and has since grown into one 
          of the leading paint manufacturers in the industry. With decades of research and innovation, we’ve 
          developed a comprehensive range of products that meet the evolving needs of our customers globally.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <h5>2018</h5>
              <p>KGK (MRF Vapcour)  Paints was established with a vision to transform the paint industry.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <h5>2019</h5>
              <p>Expanded into international markets, delivering high-quality paint solutions worldwide.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <h5>2020</h5>
              <p>Launched eco-friendly and low-VOC paint lines, setting new standards in sustainability.</p>
            </div>
          </div>
        </div>
      </section>
{/* owners info given */}
      <section className="team mt-5">
        <h2>Meet Our Founder</h2>
        <div className="row text-center">
          <div className="col-md-12">
            <div className="card p-4">
              <img src={ownerpic} alt="KGK founder" className="rounded-circle mx-auto w-25" />
              <h5 className="mt-3">Gokul Kannan</h5>
              <p> Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}
export default Aboutus