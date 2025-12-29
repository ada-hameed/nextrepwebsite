import React from 'react'

function Footer() {
  return (
   <footer>
  <div
    className="footer-area section-bg"
    style={{
      backgroundImage: "url('assets/img/gallery/section_bg03.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      fontSize: "1.5rem",
    }}
  >
    <div className="container">
      <div className="footer-top footer-padding">
        <div className="row d-flex justify-content-between align-items-start">
          {/* Logo & About */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="single-footer-caption">
              <div className="footer-logo mb-3">
                <a href="/">
                  <img
                    src="assets/img/NextRepWebsite2.png"
                    alt="NextRep Gym"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              </div>
              <div className="footer-tittle">
                <p>
                  <strong className="custom-footer-color">NextRep Gym</strong> – Your fitness journey starts here! Modern equipment, expert trainers, and a motivating environment to help you achieve your goals.
                </p>
              </div>
              <div className="footer-social mt-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:info@nextrepgym.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-4">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="custom-footer-color">Quick Links</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/plans">Plans</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="custom-footer-color">Opening Hours</h4>
                <ul>
                  <li>
                    <span>Monday - Saturday:</span> 6:00 AM - 12:00 AM
                  </li>
                  <li>
                    <span>Sunday:</span> Closed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="custom-footer-color">Contact Us</h4>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 123 Fitness Street, Mumbai, India
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i> +91 98765 43210
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> info@nextrepgym.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p style={{ color: "#ccc" }}>
              &copy; {new Date().getFullYear()} NextRep Gym. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
