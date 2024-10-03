import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <section className="text-center mb-5">
        <h1 className="display-4">Contact KGK MRF Vapcour Paints</h1>
        <p className="lead">We’d love to hear from you! Whether you have a question about our products or need assistance, feel free to reach out.</p>
      </section>

      <div className="row">
        <div className="col-md-6 mb-5">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong>LIG-523, New, Rayakottah Housing Board, Hosur, Tamil Nadu 635109</p>
          <p><strong>Phone:</strong> +91 9597417885</p>
          <p><strong>Email:</strong> Kgkpaints@gmail.com</p>
          <p><strong>Working Hours:</strong> Monday - Friday, 9 AM - 8 PM</p>
          
          <div className="mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.861253087499!2d77.82670577575311!3d12.722473120289848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71011ad56fcd%3A0x52a9bb3a83bb495d!2sKGK%20Paints%20%26%20Hardwares%20(MRF%20Vapocure%20Paints)!5e0!3m2!1sen!2sin!4v1727505953531!5m2!1sen!2sin"
              width="100%" 
              height="250" 
              allowFullScreen="" 
              loading="lazy"
              title="Google Map"
              style={{ border: 0 }}>
            </iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <h2>Get in Touch</h2>
          <form >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter the subject of your message" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
