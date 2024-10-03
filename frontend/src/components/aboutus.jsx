

function Aboutus(){
    return(
        <>
          <div className="container mt-5">
      {/* Hero Section */}
      <section className="text-center bg-primary text-white p-5 rounded">
        <h1 className="display-4">About MRF Vapcour Paints</h1>
        <p className="lead">Delivering excellence in paint technology for over 50 years.</p>
      </section>

      {/* Mission Section */}
      <section className="mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" alt="MRF Vapcour Mission" className="img-fluid rounded" />
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

      {/* History Section */}
      <section className="mt-5">
        <h2>Our Journey</h2>
        <p className="lead">
          Founded in 1970, MRF Vapcour started as a small paint manufacturing unit and has since grown into one 
          of the leading paint manufacturers in the industry. With decades of research and innovation, we’ve 
          developed a comprehensive range of products that meet the evolving needs of our customers globally.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <h5>1970</h5>
              <p>MRF Vapcour Paints was established with a vision to transform the paint industry.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <h5>1990</h5>
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

      {/* Team Section */}
      <section className="team mt-5">
        <h2>Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mx-auto" />
              <h5 className="mt-3">John Doe</h5>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mx-auto" />
              <h5 className="mt-3">Jane Smith</h5>
              <p>Chief Technology Officer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mx-auto" />
              <h5 className="mt-3">Emily Johnson</h5>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}
export default Aboutus