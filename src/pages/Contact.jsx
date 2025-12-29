import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.resp) {
        setSuccessMsg('Your enquiry has been submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // reset form
      } else {
        setErrorMsg(data.respMsg || 'Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Server error. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      {/* Slider Section */}
      <div className="slider-area2 slider-area2--bg-contact" style={{
        backgroundImage: "url('assets/img/about.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70 text-center">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-section simple-contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">We'd love to hear from you!</p>
            </div>
            <div className="col-lg-7 mb-4">
              {successMsg && <div className="alert alert-success">{successMsg}</div>}
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

              <form className="form-contact contact_form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-2 ">
                  <button type="submit" className="btn simple-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="simple-contact-info">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Mumbai, India</span>
                </div>
                <div>
                  <i className="fas fa-phone-alt"></i>
                  <span>+91 98765 43210</span>
                </div>
                <div>
                  <i className="fas fa-envelope"></i>
                  <span>info@nextrepgym.com</span>
                </div>
                <div className="simple-social mt-3">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact;
